import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {
    const { Component, isAuthRequired } = props // * Component : 페이지, isAuthRequired: 로그인이 되어있어야 하는 페이지인지 Boolean    

    const AuthenticationCheck = () => {
        const navigate = useNavigate()
        const [ cookies ] = useCookies()
        
        useEffect(() => {
            if(!cookies.auth){
                if(isAuthRequired){ // * 쿠키에 auth 토큰이 없는데 로그인 권한이 필요한 페이지에 접근하면 로그인 페이지로 redirect
                    navigate("/login", {replace: true})
                }
            }
            else{
                if(!isAuthRequired){ // * 쿠키에 auth 토큰이 있는데 로그인 권한이 필요없는 페이지에 접근하면 대쉬보드 페이지로 redirect (예: 로그인 페이지, 회원가입 페이지)
                    navigate("/dashboard", {replace: true})
                }
            }
        // eslint-disable-next-line
        }, []);

        return(
            <Component/>
        )
    }

    return (
        <AuthenticationCheck/>
    )
}

export default Auth