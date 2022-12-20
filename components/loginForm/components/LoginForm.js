import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import { initialValues, loginValidation } from "./validations";
import {Input,Button} from '../../formComponents';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../../redux/slices/login/action';
import Loader from '../../Loader';
import { useRouter } from 'next/router';

const LoginForm = () => {

    const { t } = useTranslation()
    const dispatch =  useDispatch()
    const [loading,setLoading] = useState(false)
    const router = useRouter()

    

    const submitLogin = (values) => {
        setLoading(true)
        dispatch(loginAction(values))
        setTimeout(() => {
            setLoading(false)
            router.push({
                pathname: '/payment'
            })
        },2000)

    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={(values) => {
                submitLogin(values)
            }}
        >
            {({ isSubmitting }) => {
                return (
                    <> {
                        loading ?  <Loader/> : ''
                       }
                        <Form  className="form">
                            {
                                Object.keys(initialValues).map((item, index) => (
                                    <div className="col-4">
                                        <Field
                                            maxLength={20}
                                            key={index}
                                            placeholder={t(item)}
                                            name={item}
                                            component={Input}
                                        />
                                    </div>
                                ))
                            }
                            <Button  disabled={isSubmitting} className="btn-danger" text="submit" />

                        </Form>
                    </>
                )
            }}

        </Formik>
    )
}


export default LoginForm;