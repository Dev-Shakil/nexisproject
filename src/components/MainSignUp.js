import React, { useContext} from 'react';
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import styled from 'styled-components';
import { StepContext } from '../SignUpContext';
const MainSignUp = () => {
const {currentStep} = useContext(StepContext)

    
  return (
    <Wrapper>
        {
            currentStep===1 ? <SignUp1/> : currentStep===2 ?<SignUp2/>:<SignUp3/>
           
        }
    </Wrapper>
  )
}
const Wrapper = styled.section`
 h1{
  display:flex;
  justify-content:center;
  color:green;

 }
 @media (max-width:768px){
  display:flex;
  justify-content:center;
  align-items:center;
  padding:40px;
 }
   
`
export default MainSignUp