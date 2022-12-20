
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
 

const Profile = () => {
    const loginStore = useSelector(state => state?.login)
    const router = useRouter()
  
    useEffect(() => {
      if (!loginStore?.isLogged) {
        router.push('/login')
      }
    },[])

    return (
        <div className="container mt-5">
            <h1 className="mb-4">this is profile page</h1>
             {
                loginStore?.userInfo ? (
                    <>
                      <h3>This is your profile, {loginStore?.userInfo['firstName']} {loginStore?.userInfo['middleName']} {loginStore?.userInfo['lastName']}</h3>
                    </>
                ) : ''
             }
        </div>
    )
}

export default Profile;