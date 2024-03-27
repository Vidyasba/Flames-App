import { useState } from 'react';
import './App.css';
function App() {

  const answerElement =document.querySelector('[data-testid="answer"]');

  const [name1,setName1]=useState('');
  const [name2,setName2]=useState('');

  const handlechange1=(e)=>{
    setName1(e.target.value);
  }
  
  const handlechange2=(e)=>{
    setName2(e.target.value);
  }

  const handleClick = (e) => {
    // const answerElement =document.querySelector('[data-testid="answer"]');
     if(name1=='' && name2==''){
     answerElement.innerText= "Please Enter valid input";
     return;
    }
    let finalStr = '';
    let modifiedName2 = name2; 

    for (let i = 0; i < name1.length; i++) {
        const char = name1[i];
        if (!modifiedName2.includes(char)) {
            finalStr += char;
        } else {
            modifiedName2 = modifiedName2.replace(char, '');
        }
    }
    finalStr += modifiedName2; 
    console.log(finalStr); 
    let sum=0;
    for(let k=0;k<finalStr.length;k++){
      sum=sum+1;
    }
    let mod= sum%6;
    console.log(mod);
    
  
    if(mod ===1){
      answerElement.innerText = "Friends";
    }else if(mod ===2){
      answerElement.innerText = "Love";
    }else if(mod===3){
      answerElement.innerText = "Affection";
    }else if(mod===4){
      answerElement.innerText = "Marriage";
    }else if(mod===5){
      answerElement.innerText = "Enemy";
    }else if(mod===0){
      answerElement.innerText = "Siblings";
    }

}
const clearFeild=()=>{
  setName1('');
  setName2('');
  answerElement.innerText=''
}
  return (
    <div className="App">
               <input data-testid="input1" name="name1" value={name1} onChange={handlechange1} placeholder="Enter first name"/>
               <input data-testid="input2" name="name2" value={name2} onChange={handlechange2} placeholder="Enter second name"/>
               <button data-testid="calculate_relationship" onClick={handleClick}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={clearFeild}>Clear</button>
               <h3 data-testid="answer"></h3>

    </div>
  );
}

export default App;
