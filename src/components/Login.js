import React from 'react'
import styled from 'styled-components';
import MainLogin from './MainLogin';

const Login = () => {
  return (
    <Wrapper>
        <img className="logo" src="images/logo.png" alt="logo"/>
        <div className="main-div">

            <div className="imgdiv">
                
                <img className="banner"src="images/banner.png" alt="app-banner"/>
            </div>
            <div className="main-signUp">
                <MainLogin/>
            </div>
        </div>
        </Wrapper>
  )
}
const Wrapper = styled.section`
    .logo{
        padding:20px 0 0 30px;
    }
    .main-div{
        display:flex;
        justify-content:center;
        flex:3;
        flex-direction:row;
        flex-wrap:wrap;
        padding:0px 30px;
    }
    .imgdiv{
        display:flex;
        justify-content:center;
        align-items:center;
        flex:1.8;
        .banner{
            
        }
    }
    .main-signUp{
        flex:1.2;
        background:gray;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:80vh;
        background: #FFFFFF;
        padding-top:20px;
box-shadow: 1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25);
    }
    @media (max-width:768px){
        .main-div{
            padding:0px 50px;
            .imgdiv{
                display:none;
            }
        }
        .banner{
            display:none;
        }
        .main-signUp{
            width:80%;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:40px;
        }
    }
`

export default Login