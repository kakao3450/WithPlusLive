import React from 'react';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const Google = () => {
  const {google} = window
  // const [user , setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token : " + response.credential)
    const userObject = jwtDecode(response.credential)
    console.table(userObject)
    // setUser(userObject)
  }


  useEffect(()=>{
    /* global google */
    console.log(google)
    window.google?.accounts.id.initialize({
      client_id : "1046496492066-6sqht4fonn2toe2utn1npkpupeeeqft1.apps.googleusercontent.com",
      callback : handleCallbackResponse
    })
    google?.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme : "outline",size:"large", type:"icon",}
    )
  },[])

  return (
    <>
      <div id="signInDiv"></div>
    </>
  );
}


export default Google