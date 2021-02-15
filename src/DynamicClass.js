import { useState } from "react";
import './MyButton.css';

function DynamicClass()
{
    
    const [myCondition,chnageMyCondition] = useState (false);

    let myScreen = '';

    let myClasses=[];

    if(myCondition)
    {
        myScreen=(
            <div>
                <h1>This is my div</h1>
            </div>
        );
        myClasses.push ('green');
        // myClasses.push ('my_align');
    }
    else{
        myClasses.push ('red');
        // myClasses.push ('my_align');

    }

    const myToggleFunc = () =>
    {
        chnageMyCondition(!myCondition);
    }
    
    return(
      <div>
          <button className={myClasses.join('')} onClick ={myToggleFunc}>Toggle</button>

          {myScreen}
      </div>
    );
}
export default DynamicClass;