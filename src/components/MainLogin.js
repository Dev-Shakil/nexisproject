import React, { useContext, useState } from 'react'
import axios from "axios";
import styled from 'styled-components';
import { StepContext } from '../SignUpContext';
import {Link,useNavigate} from "react-router-dom";
const MainLogin = () => {
  const [isSuccess,setIsSuccess] = useState("")
  const {loginData,setSignupErr,Validate,setLoginData,setSuccess,success,msgremove,setIsSubmit,setMsgremove} = useContext(StepContext);
  const loginurl = "https://test.nexisltd.com/login";
  const navigate = useNavigate();
   const PostLoginData = async () =>{
       setSignupErr(Validate(loginData))
       setIsSubmit(true)
       
    const result = await axios.post(loginurl,loginData).then((res)=>{
           console.log("posted Logindata", res.data);
           const {access_token} = res.data;
           localStorage.setItem("token",access_token);
           
          //  window.location.href = "./attendents"
          navigate("/attendents");
           setLoginData("")  
          
       }).catch((err)=> {console.log(err)
           if(err.response.status===500){
               console.log(err.response)
               setIsSuccess(err.response.data.error)
           }
       })
       return result
   }
  // 
  //  const token = localStorage.getItem("token");
  //  useEffect(()=>{
  //   if(token){
  //     
  //   }
  //  },[token])

   
  
  return (
    
    <Wrapper>
    
      <h1 style={{display:msgremove?"none":"block"}} className="sucess">{isSuccess} <span  className="remove" onClick={()=>setMsgremove(true)}>X</span></h1>
      <h3 className="title">LogIn Form</h3>
      <div className="input-feilds">
        <input className="input" required value={loginData["email"]} onChange={(e)=>setLoginData({...loginData,"email" : e.target.value})} type="email" placeholder="Enter your E-mail"/>
        <input className="input" required value={loginData["password"]} onChange={(e)=>setLoginData({...loginData,"password" : e.target.value})} type="password" placeholder="Enter your Password"/>
        <p className="msg">your password must be 8 charecter</p>
        
      </div>
      <button onClick={PostLoginData} className='next-btn'>Login <img src="images/Arrow 1.png" alt="next"/></button>
      <div className="login-btn"><p>Doesn't Have an account?</p><p><Link to="/" className="btn">Register HERE!</Link></p></div>
     
    </Wrapper>

    
  )
}
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.log{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background:red;
  padding:10px;
  width:100%;
}
  .sucess{
    color:green;
    padding-left:20px;

  }
  .title{
    padding-top:15px;
    width:124px;
    height:24px;
    font-family:inter;
    font-style:normal;
    font-weight:600;
    font-size:20px;
    line-height:24px;
  }
  .remove{
    font-weight:700;
    font-size:12px;
    color:red;
    border:1px solid red;
    padding:3px;
    border-radius:50%;
    cursor:pointer;
    hieght:25px;
    width:25px;
    margin-left:20px;
  }
  .input-feilds{
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:ceter;
    .msg{font-size:12px;color:gray;}
  }
  
  .input{
    width:369px;
    margin-top:20px;
    border:none;
    padding:6px;
    margin-top:40px;
    border-bottom:2px solid #b4b4b4;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

color: #B4B4B4;
  }
  .input:focus{
    outline:none
  }
  .next-btn{
    width:156px;
    height:39px;
    font-weight:500;
    font-size:16px;
    line-height:19px;
    background:#1678cb;
    border:none;
    border-radius:10px;
    color:white;
    display:flex;
    justify-content:space-around;
    margin-top:60px;
    align-items:center;
  }
  .login-btn{
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
    height:120px;
    align-items:flex-end;
    margin-top:40px;
    width:100%;
  }
  .login-btn p{
    width: 146px;
    height: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color:#7e7e7e;

  }
  .btn{
    width: 88px;
  height: 17px;
  cursor:pointer;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1678cb !important;
  text-decoration-line:underline;
  }
  @media (max-width:768px){
    .main{
    height:80vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;


  }
    .input-feilds{
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items-center;
      width:80%;
      .input{
        width:96%;
        
      }
    }
    .login-btn{
      display:flex;
      justify-content:flex-end;
      flex-direction:row;
      height:120px;
      align-items:flex-end;
      margin-top:0px;
      width:100%;
    }
    .next-btn{
      margin-top:20px;
    }
  }
`

export default MainLogin