import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { fields } from "./validations";
import { Input, RadioInput, InputMask, Button } from '../../formComponents';
import { post } from '../../../services/api';
import Loader from '../../Loader';
import { paymentAction } from '../../../redux/slices/payment/action';
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Modal from '../../Modal';
import { clearStore } from '../../../redux/slices/payment/reducer';



const PaymentForm = () => {

    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const result = useSelector(state => state?.payment?.result)
    const userInfo = useSelector(state => state?.login?.userInfo)
    const resultKeys = result?.map(item => Object.keys(item))?.flat()
    const dispatch = useDispatch()

    const initialValues = Object.fromEntries(fields.map(item => [item?.name, item?.initialValue]))
    const validationSchema = Yup.object().shape(Object.fromEntries(fields.map(item => [item?.name, item?.type])))

    const fieldsWithRadioInput = fields?.filter(item => item.items)
    const fieldsWithInput = fields?.filter(item => !item.items)

    const closeModal = () => {
        setShowModal(false)
       dispatch(clearStore())
    }

    const onSubmit = async (values) => {
        setLoading(true)
        const data = {
            "paymentServiceProvider": values?.paymentServiceProvider,
            "paymentDetails": {
                "categoryId": values?.categoryId,
                "currency": values?.currency,
                "amount": values?.amount

            },
            "clientDetails": {
                "firstName": values?.firstName,
                "lastName": values?.lastName,
                "middleName": values?.middleName,
                "clientId": values?.clientId
            },
            "financeDetails": {
                "cardNumber": values?.cardNumber,
                "paymentSystem": values?.paymentSystem,
                "expiryDate": values?.expiryDate,
                "bankAccountNo": values?.bankAccountNo
            },
            "supplierDetails": {
                "supplierId": values?.supplierId,
                "regionId": values?.regionId,
                "paymentNo": values?.paymentNo
            },
            "operationDetails": {
                "type": values?.operationDetailstype
            }
        }

        dispatch(paymentAction(data))
        setTimeout(() => {
            setLoading(false)
            setShowModal(true)
        }, 1000);

    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values,{ resetForm }) => {
                    onSubmit(values)
                    resetForm()
                }}
            >
                {({ isSubmitting }) => {
                   
                    return (
                        <>
                            {
                                loading ? <Loader /> : ''
                            }
                            <Modal show={showModal} handleClose={closeModal}>
                                {
                                  result?.length ? (
                                    <>
                                        {
                                             result?.map((item, index) => (
                                                <Alert key={index} variant='success'>
                                                   {resultKeys[index]}:{item[resultKeys[index]]}
                                                </Alert>
                                         ))
                                        }
                                    </>
                                  ) : (
                                        <Alert  variant='danger'>
                                             You have error 
                                        </Alert>
                                    )
                                }
                            </Modal>
                            <Form className='row pb-5 form'>
                                {
                                    <>
                                        {
                                            fieldsWithRadioInput.map((field, index) => (
                                                <div className='col-3' key={index}>
                                                    <h3>{t(field?.name)}</h3>
                                                    {
                                                        field?.items.map((item, index) => (
                                                            <Field
                                                                key={index}
                                                                name={field?.name}
                                                                component={RadioInput}
                                                                label={t(item?.name)}
                                                                defaultChecked={index == 0}
                                                            />

                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                        {
                                            fieldsWithInput?.map((item, index) => (
                                                <div className='col-6'>
                                                    <Field
                                                        key={index}
                                                        mask="9999 9999 9999 9999"
                                                        name={item?.name}
                                                        component={item.name != 'cardNumber' ? Input : InputMask}
                                                        placeholder={t(item?.name)}
                                                    />
                                                </div>

                                            ))
                                        }
                                    </>
                                }
                                <div className="col-12 mt-4">
                                    <Button disabled={isSubmitting} className="btn-danger" text='submit' />
                                </div>
                            </Form>
                        </>
                    )
                }}

            </Formik>
        </>
    )
}


export default PaymentForm;