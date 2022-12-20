import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { PaymentForm } from "../components/paymentForm";

const Payment = () => {
    const isLogged = useSelector(state => state?.login?.isLogged)
    const router = useRouter()

    useEffect(() => {
        if (!isLogged) {
            router.push('/login')
        }
    }, [])
    return (
        <>
            <PaymentForm />
        </>
    )
}

export default Payment;