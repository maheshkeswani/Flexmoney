import React from 'react'
import { useState } from 'react';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [data,setData] = useState({});
  const handlechange = (e) => 
  {
    setData({...data,[e.target.name]: e.target.value})

  }
  const handleSubmit=  async (e) => {
    e.preventDefault()
    const {Age} =  {...data};
    if( Age < 18 || Age > 65)
    {
toast.error('Age Must Be Between 18 & 65', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
    }
    else
    {
    const url  = 'https://flexmoney-backend.onrender.com/register'
    const response = await fetch(url,{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) 
  })
response.json().then((msg) => {
        if(msg.message === 'Success')
        {
toast.success('Registration Successful', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
        }
        else if(msg === 11000)
        {
toast.error('Email Already Registered', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
        }
        else
        {
            console.log(msg);
toast.error('Some Error Occured', {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
        }
    })
      // API CALL TO POST Form Data 

    }
  
  }
  return (
 <form method='POST' className="mx-1 mx-md-4" id='user-Details' onSubmit={handleSubmit}  autoComplete='off'>                        
    <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-user fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
                <input type="text" id="Reg-name" className="form-control" name='Name' placeholder='Your Name' required onChange={handlechange}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-calendar fa-lg me-3  fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="Reg-age" className="form-control" name='Age'placeholder='Age(Should be between 18-65)' onChange={handlechange} required />
                          </div>
                        </div>
                         <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-venus-mars fa-lg me-3  fa-fw"></i>

                          <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="Gender" id="Reg-Male" value="Male" onChange={handlechange} required/>
  <label className="form-check-label" htmlFor="Reg-Male">Male</label>
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="Gender" id="Reg-female" value="Female" onChange={handlechange} required/>
  <label className="form-check-label" htmlFor="Reg-Female">Female</label>
</div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="Reg-Email" className="form-control" name='Email' placeholder='Your Email'  onChange={handlechange} required/>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="Submit" form='user-Details'  value = "Submit" className="btn btn-primary btn-lg">Register</button>
                        </div>
</form>
                    
  )
}

export default Register