import * as Yup from 'yup';


const loginValidation = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        middleName: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
    })


const initialValues = {
        firstName: '',
        lastName: '',
        middleName:''
   
}


export {
    loginValidation,
    initialValues
};