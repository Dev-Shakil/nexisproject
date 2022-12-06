import React, { useContext } from 'react'
import styled from 'styled-components';
import { StepContext } from '../SignUpContext';
import {Link} from "react-router-dom"
const SignUp2 = () => {
  const {setCurrentStep,userData,setUserData,signupErr} = useContext(StepContext);
  return (
    
    <Wrapper>
      <h3 className="title">SignUp Form</h3>
      <div className="input-feilds">
        <div>
        <input className="input" required value={userData["phone_number"]} onChange={(e)=>setUserData({...userData,"phone_number" : e.target.value})} type="tel" placeholder="Write Phone Number"/>
        <p>{signupErr.phone_number}</p>
        </div>
        <div>
        <input className="input" required value={userData["email"]} onChange={(e)=>setUserData({...userData,"email" : e.target.value})} type="email" placeholder="Write Email Address"/>
        <p>{signupErr.email}</p>
        </div>
      </div>
      <div className="buttons">
        <p onClick={()=>setCurrentStep(1)} className="back">Back</p>
      <button onClick={()=>setCurrentStep(3)} className='submit-btn'>Next Step <img src="images/Arrow 1.png" alt="next"/></button>
      </div>
      <div className="login-btn"><p>Already Have an account?</p><p><Link to="/login"className="btn">LOGIN HERE!</Link></p></div>
    </Wrapper>

    
  )
}
const Wrapper = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:100%;
  flex-direction:column;
  .title{
    width:124px;
    height:24px;
    font-family:inter;
    font-style:normal;
    font-weight:600;
    font-size:20px;
    line-height:24px;
  }
  .input-feilds{
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
  }
  .input-feilds p{
    color:red;
    fon-weight:700;
  }
  .input{
    width:369px;
    margin-top:40px;
    border:none;
    padding:6px;
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
  .submit-btn{
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
    cursor:pointer;
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
  .buttons{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    
  }
  .back{
    margin-top:65px;
    margin-right:50px;
    cursor:pointer;
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;


color: #767676;
  }
`

export default SignUp2