import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { toast } from 'react-toastify';
const Payment = () => {
     const value = dayjs(Date.now());
    const [data,setData] = React.useState({Date:`${dayjs(value).month()} ${dayjs(value).year()}`});
     const handlechange = (e) => 
  {
    setData({...data,[e.target.name]:e.target.value})
  }
   
    const handleSubmit= async (e) => {
    e.preventDefault()
    const {Batch} =  {...data};
    if(Batch === undefined)
    {
toast.error('Please Select One Of The Batches', {
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
    const url  = 'https://flexmoney-backend.onrender.com/payment'
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
toast.success('Payment Successful', {
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
toast.error(`${msg.message}`, {
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
// else
//         {
//             console.log(msg);
// toast.error('Some Error Occured', {
// position: "bottom-center",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "colored",
// });
//         }
    });
      // API CALL TO POST Form Data 

    }
  
  }
  return (
    <form method='POST' className="mx-1 mx-md-4" id='user-Details' onSubmit={handleSubmit}  autoComplete='off'>  
     <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="Reg-Email" className="form-control" name='Email' placeholder='Use Registered Email'  onChange={handlechange} required/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                         <i className="fa-solid fa-clock fa-lg me-3 fa-fw"></i>
                        
                          <select className="form-select" aria-label="Selected-batch" onChange={handlechange}  name="Batch">
                          <option value="" defaultValue>Select Batch</option>
                          <option value="6-7 AM" >6-7 AM</option>
                          <option value="7-8 AM">7-8 AM</option>
                          <option value="8-9 AM">8-9 AM</option>
                          <option value="5-6 PM">5-6 PM</option>
                          </select>

                        </div>
 
                       
                        <div className="d-flex flex-row align-items-center mb-4">
                           <i className="fa-solid fa-calendar-days fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year', 'month']}
          label="Month and Year"
          value={value}
          disabled
          renderInput={(params) => <TextField size = 'small' {...params} helperText={null} fullWidth 
          
           />}/>
          </LocalizationProvider>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-indian-rupee-sign fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" className="form-control"  value="Rs. 500" disabled/>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="Submit" form='user-Details'  value = "Submit" className="btn btn-primary btn-lg">Pay</button>
                        </div>
 </form>
  )
}

export default Payment