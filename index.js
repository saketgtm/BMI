let weight;
let height;

document.getElementById("myBtn").onclick = function() {
  weight = document.getElementById("weightBox").value;
  weight = Number(weight);

  height = document.getElementById("heightBox").value;
  height = Number(height);

   const bmi = Math.floor(weight/Math.pow(height, 2));


   if(bmi < 18.5){
     document.getElementById("result").innerHTML = "Your BMI is " + bmi + ", you're in the underweight range" ;
   }
   if(bmi >= 18.5 && bmi <25 ){
     document.getElementById("result").innerHTML = "Your BMI is " + bmi + ", you're in the healthy weight range" ;
   }
   if(bmi >= 25 && bmi < 30){
     document.getElementById("result").innerHTML = "Your BMI is " + bmi + ", you're in the overweight range";
   }
   if(bmi >= 30 && bmi < 40){
     document.getElementById("result").innerHTML = "Your BMI is " + bmi + ", you're in the obese range" ;
   }

}
