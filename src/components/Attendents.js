import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import DataTable from './DataTable';

const Attendents = () => {
    const [attendance, setAttendance] = useState([]);
     // Login Post Request Function
     const AuthStr = "Bearer ".concat(localStorage.getItem("token"))
     const token = localStorage.getItem("token");
     const geturl = "https://test.nexisltd.com/test";
    
     
     useEffect(()=>{
         if(token){
            
             // Getting Data from Api with Access Token
         async function fetchData() {
           const results = await  axios.get(geturl,{headers:{Authorization: AuthStr}}).then((res)=>{
                
                 setAttendance(Object.values(res.data));
             
                 
             }).catch((err)=> {console.log("tokenErr" + err)})
             return results
         }
         fetchData()
         }
   
     },[geturl,token,AuthStr])
    
    return (
    <Wrapper>
        <img src="images/logo.png" alt="site-logo" />
       <div className="show"> <h1>Attendance Information</h1>
      </div><div>
    
        <DataTable attendance={attendance}/>
        
        </div>
    </Wrapper>
  )
};
const Wrapper = styled.div`
    .show{display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    }
    img{
        padding:20px 0px 0px 30px;
        height:70px;
        width:220px;
    }
    h1{
        display:flex;
        justify-content:center;
        align-items-center;
        color:white;
        background-color:#1678cb;
        width:40%;
        padding:7px;
        height;72px;
        font-weight:600;
        font-size:36px;
        line-height:42px;
    }
    .grid-five-column {
        display:grid;
        grid-template-columns: repeat(5, 1fr);
        text-align: center;
        align-items: center;
      }
      .cart-heading {
        text-align: center;
        text-transform: uppercase;
        
      }
      hr {
        margin-top: 1rem;
      }
      .items{
        padding: 3.2rem 0;
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
      }
      @media (max-width:768px){
        .show{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:;
            }
        .show h1{
            font-size:16px;
        }
      }
`

export default Attendents