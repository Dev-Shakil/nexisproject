import axios from 'axios';
import React, { createContext,useState } from 'react'

export const StepContext = createContext();
const SignUpContext = ({children}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [signupErr, setSignupErr] = useState({});
    const [loginData, setLoginData] = useState([]);
    const [isSubmit,setIsSubmit] = useState(false);
    const [success, setSuccess] = useState("");
    const [msgremove, setMsgremove] = useState(false);
    
    // LoginHandler function
  
    
    // SignUpHandler function
    const SubmitData = (e) =>{
        
        e.preventDefault();
        setSignupErr(Validate(userData));
        
        PostData();
        setCurrentStep(1)
    }


    

    // SignUp Post Request function
    const PostData = () =>{
        const url = "https://test.nexisltd.com/signup "
       
            axios.post(url,userData).then((res)=>{
                console.log("posted data", res);
                if(res.data.sucess){
                    setSuccess("Your Request has been Sucessfully Submited")
                    setUserData("")
                }
                
            }).catch(err=> console.log("signupErr"+err))
        
    }
    // useEffect(()=>{
    //     if(Object.keys(signupErr).length===0 && isSubmit){}
    // },[signupErr])

    // validation Function
    const Validate = (values) => {
        const errors = {};
        if(!values.first_name){
            errors.first_name = "firstname is required"
        }
        if(!values.last_name){
            errors.last_name = "lastname is required"
        }
        if(!values.phone_number){
            errors.phone_number = "phone is required"
        }
        if(!values.email){
            errors.email = "email is required"
        }
        if(!values.password){
            errors.password = "password is required"
        }else if(values.password.length < 8){
            errors.password = "password must be more than 8 characters"
        }
        return errors;

    }
    
  return (
    <StepContext.Provider value={{setSignupErr,Validate,msgremove,isSubmit,setIsSubmit,setMsgremove,currentStep,setCurrentStep,userData,success,setUserData, SubmitData , signupErr,loginData,setLoginData }}>{children}</StepContext.Provider>
  )
}

export default SignUpContext