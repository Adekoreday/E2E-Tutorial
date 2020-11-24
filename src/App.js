import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from './components/button';
import Alert from './components/alert';
import './App.css';

function App() {
  const [data, setData] = useState({plans: [], isFetching: false});
  const [subdata, setSubscription] = useState({subscription: [], isFetchingSubs: false, isFailure: false, isSuccess: false});
  const USER_SERVICE_URL = 'http://localhost:3000/plans';
  useEffect(() => {
    const fetchPlans = async () => {
        try {
            setData({plans: [], isFetching: true});
            const response = await axios.get(USER_SERVICE_URL);
            console.log(response, 'this is the response');
            setData({plans: response.data, isFetching: false});
        } catch (e) {
            setData({plans: [], isFetching: false});
            console.log(e, 'err');
        }
    };
    fetchPlans();
}, []);

const subscribe = async ({userId, planId}) => {
 try{
  setSubscription({subscription: subdata.subscription, isFetchingSubs: true, isSuccess: false});
 const response = await axios.post('http://localhost:3000/orders', {
    "userId": userId,
    "planId": planId
  });
  setTimeout(() => {
  setSubscription({subscription: response.data, isFetchingSubs: false,  isFailure: false, isSuccess: true});
 }, 1000);

 }catch(e) {
  setSubscription({subscription: subdata.subscription, isFetchingSubs: false, isFailure: true,  isSuccess: false});
 }
}
  return (
    <div className="App">
       <Alert type={subdata.isFetchingSubs ? 'loading': ''}/>
       <Alert type={subdata.isSuccess ? 'success': ''}/>
       <Alert type={subdata.isFailure ? 'failure': ''}/>
      {
      <div className="container">
      {
       data.plans.map((plan, i) => 
        <div className="plans" key={i}>
          <div className="plan__name">{plan.name}</div>
          <div className="plan__price">${plan.price}</div>
          <Button
          handleClick = {subscribe}
          userId = {1}
          planId = {plan.id}
          >Subscribe</Button>
      </div>)
      }
      </div>
      }
    </div>
  );
}

export default App;
