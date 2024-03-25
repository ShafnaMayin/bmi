function calculatebmi(){
    let weight =document.getElementById('weight').value
    let height =document.getElementById('height').value
    let result=document.getElementById('result');
     
    if(!height || isNaN(height) || height < 0){
        result.innerText =`Please provide a valid height`;
        return;
    }

    else if(!weight || isNaN(weight) || weight < 0){
        result.innerText =`Please provide a valid Weight`;
        return;
    }
   
    let bmi=(weight / ((height * height) /10000) ).toFixed(2);

     if(bmi <18.5){
        result.innerText=`under weight : ${bmi}`;
    }
    else if( bmi >= 18.5 && bmi < 24.9){
        result.innerText=`Normal : ${bmi}`;
    }
    else if( bmi >= 25 && bmi < 29.9){
        result.innerText=`Over Weight : ${bmi}`;
    }
    else if( bmi >= 30  && bmi < 39.9){
        result.innerText=`Obesity : ${bmi}`;
    }
    else{
        result.innerText=`Extreme Obesity`
    }


}