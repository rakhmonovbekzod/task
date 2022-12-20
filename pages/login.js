import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LoginForm } from "../components/loginForm";


const Login = () => {

  const isLogged = useSelector(state => state?.login?.isLogged)
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      router.push('/profile')
    }
  },[])
  
    return (
        <div>
          <LoginForm/>
        </div>
    )
}

export default Login;