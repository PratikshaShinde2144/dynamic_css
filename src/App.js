import { useState } from 'react';
import './Pratiksha.css';
function App()
{

const [myCondition,chnageMyCondition] = useState(false);
 let myDesign = '';

 let style ={
  backgroundColor:'red',
  color:'white',
  margin:'50px',
};

 const showMyDivFunc = () =>
 {
  chnageMyCondition(true);
 }

 const hideMyDivFunc = () =>
 {
  chnageMyCondition(false);
 }

 const ToggleMyDivFunc = () =>
 {
   let myCondition2 = myCondition;
   chnageMyCondition(!myCondition2);
 }
 

 if (myCondition)
 {
   myDesign = (
     <div className="main_div">
        <h1>This Is Div</h1>
     </div>
   );
   style.backgroundColor="green";

 }
 else{
   style.backgroundColor="red";
 }

  return(
  <div>
    {/* <button className="showBTN" onClick={showMyDivFunc}>Show Div</button>
    <button className="hideBTN" onClick={hideMyDivFunc}>Hide Div</button> */}

    <button className="hideBTN" onClick={ToggleMyDivFunc}>Toggle Button</button>
    
    {myDesign}

  </div>
  );

}
export default App;