// import './App.css'
import React from 'react'
  import { ToastContainer,} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import bg from './images/bg-2.png'
import Register from './components/register';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Payment from './components/payment';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function App() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
<div className="App" >
<section className="min-vh-100"   style={{background: "linear-gradient(to bottom, #2C5364, #203A43, #0F2027)"}}>
        <div className="container h-100 ">
            <div className="row d-flex justify-content-center align-items-center min-vh-100 ">
            <div className="col-lg-12 col-xl-11 ">
              <div className="card text-black" style={{borderRadius: '25px'}}>
                <div className="card-body">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sutra Yoga Classes</p>
<Box>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Register"  />
    <Tab label="Pay Fee"  />
  </Tabs>
</Box>
<TabPanel value={value} index={0}>
  <Register/>
</TabPanel>
<TabPanel value={value} index={1}>
  <Payment/>
</TabPanel>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={bg} className="img-fluid" alt="Sample" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
</div>
  );
}

export default App;
