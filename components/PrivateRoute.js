import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


function RouteGuard({ children }) {
    const isLogin = useSelector(state => state?.login?.isLogged)
    
    const [isLogged, setIsLogged] = useState(isLogin)
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    useEffect(() => {
        authCheck(router.asPath);
        const hideContent = () => {
            setAuthorized(false)
        };
        const onRouteChange = () => {
            authCheck(router.asPath);
        }
        
        router.events.on('routeChangeStart', hideContent);
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', onRouteChange);
        }
    }, []);

    useEffect(() => {
        setIsLogged(isLogin)
        authCheck(router.asPath)
        if (isLogin) {
            setAuthorized(true)
        }
    }, [isLogin])

    function authCheck(url) {
        const publicPaths = ['/login', '/'];
        const path = url.split('?')[0];
        if (!isLogged && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/login',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}

export { RouteGuard };