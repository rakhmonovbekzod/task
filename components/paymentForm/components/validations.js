import * as Yup from 'yup';


const paymentCategories = [
    {
        name: 'Cash',
        value: 'cash'
    },
    {
        name: 'Checks',
        value: 'check'
    },
    {
        name: 'Debit cards',
        value: 'debit'
    },
    {
        name: 'Credit cards',
        value: 'credit'
    },
    {
        name: 'Mobile payments',
        value: 'mobile'
    },
]

const paymentServiceProviders = [
    {
        name: 'Amazon Pay',
        value: 'amazon'
    },
    {
        name: 'PayPal',
        value: 'paypal'
    },
    {
        name: 'Stripe',
        value: 'stripe'
    },
    {
        name: 'Square',
        value: 'square'
    },
]

const currencies = [
    {
        name: 'US dollar',
        value: 'USD'
    },
    {
        name: 'Euro',
        value: 'EUR'
    },
    {
        name: 'Russian Ruble',
        value: 'rubl'
    },
    {
        name: 'Uzbek sum',
        value: 'sum'
    },
]

const paymentSystems = [
    {
        name: 'Firts payment system',
        value: 'first'
    },
    {
        name: 'Second Payment system',
        value: 'second'
    },
    {
        name: 'Last payment system',
        value: 'last'
    }
]


const fields = [
    {
        name: 'paymentServiceProvider',
        label: 'paymentServiceProvider',
        initialValue: '',
        component:'RadioInput',
        items: paymentServiceProviders
    },
    {
        name: 'firstName',
        label: 'lastName',
        initialValue: '',
        type: Yup.string().min(2, 'Too Short!').required('Required'),
        component:'Input',
    },
    {
        name: 'lastName',
        label: 'lastName',
        initialValue: '',
        type: Yup.string().min(2, 'Too Short!').required('Required'),
        component:'Input',
    },
    
    {
        name: 'middleName',
        label: 'middleName',
        initialValue: '',
        type: Yup.string().min(2, 'Too Short!').required('Required'),
        component:'Input',
    },
    {
        name: 'categoryId',
        label: 'categoryId',
        initialValue: '',
        component:'RadioInput',
        items:paymentCategories
    },
    {
        name: 'currency',
        label: 'currency',
        initialValue: '',
        component:'RadioInput',
        items:currencies
      
    },
    {
        name: 'paymentSystem',
        label: 'paymentSystem',
        initialValue: '',
        component:'RadioInput',
        items:paymentSystems
    },
    {
        name: 'amount',
        label: 'amount',
        initialValue: '',
        type:Yup.string().required('Required'),
        component:'Input'
    },
    {
        name: 'cardNumber',
        label: 'cardNumber',
        initialValue: '',
        type: Yup.string().min(10, 'Too Short!').max(20, 'Too long!').required('Required'),
        component:'Input'
            
    },
    {
        name: 'bankAccountNo',
        label: 'bankAccountNo',
        initialValue: '',
        type:Yup.string().required('Required'),
        component:'Input'
    },
    {
        name: 'expiryDate',
        label: 'expiryDate',
        initialValue: '',
        type: Yup.string().required('Required'),
        component:'Input'
    },
    {
        name: 'supplierId',
        label: 'supplierId',
        initialValue: '',
        type: Yup.string().min(2, 'Too Short!').required('Required'),
        component:'Input'
    },
    {
        name: 'regionId',
        label: 'regionId',
        initialValue: '',
        type: Yup.string().required('Required'),
        component:'Input'
    },
    {
        name: 'paymentNo',
        label: 'paymentNo',
        initialValue: '',
        type: Yup.string().required('Required'),
        component:'Input'
    },
    {
        name: 'operationDetailstype',
        label: 'operationDetailstype',
        initialValue: '',
        type: Yup.string().required('Required'),
        component:'Input'
    }

]




const initialValues = {
    paymentServiceProvider: '',
    paymentDetails: null,
    financeDetails: null,
    supplierDetails: null,
    operationDetails: null

}


export {
    fields
};

