import React from 'react'
import MainSignUp from './MainSignUp';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
        <img className="logo" src="images/logo.png" alt="logo"/>
        <div className="main-div">
        <div className="imgdiv">
        
        <img classname="banner"src="images/banner.png" alt="app-banner"/>
        </div>
        <div className="main-signUp">
        <MainSignUp/>
        </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.section`
padding:40px;

.logo{
    padding:20px 0px 0px 30px;
    height:70px;
    width:220px;
   }
    .main-div{ display:flex;
        justify-content:space-between;
        flex:3;
        flex-wrap:wrap;
        }
   
    .imgdiv{
        flex:1.8;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        position:relative;
   .banner{
    width:512px;
    height: 437px;
    justify-content:center;
    display:flex;
   }
   
   }
   .main-signUp{
    flex:1.2; 
    height:97vh;
    margin:10px 30px 10px 0;
    background: #FFFFFF;
    box-shadow: 1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25);
    width:516px;
   }
   @media (max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    .main-div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:0 50px;
    }
    .imgdiv{
        height:auto;
        padding-left:0;
        display:none;
        img{
            width:400px;
            height:320px;
        }
    }
   }
   .main-signUp{
    width:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:50px;

    height:80vh;
   }
`

export default Home