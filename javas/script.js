var CC;

function dayOfTheWeek(){
var YY = document.getElementById("years").value;
console.log(YY);
var MM = document.getElementById("months").value;
console.log(MM);
var DD = document.getElementById("days").value;
console.log(DD);
var gender = document.getElementById("m").value;
console.log(gender);
var gender = document.getElementById ("f").value;
console.log(gender);
    var day =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    var answer = Math.floor(day);

          if(answer === 0 && gender === "Male"){
           document.getElementById("demo").innerHTML = "Your Akan name is Kwasi";
         
      }
            else if(answer === 1 && gender === "Male")
       {
    document.getElementById("demo").innerHTML = "Your Akan name is Kwadwo";
   
   }
      else if(answer === 2 && gender === "Male")
{
    document.getElementById("demo").innerHTML = "Your Akan name is Kwabena";
   
}
else if(answer === 3 && gender === "Male"){
   document.getElementById("demo").innerHTML = "Your Akan name is Kwaku";
  
}
else if(answer === 4 && gender === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Yaw";
   
}
else if(answer === 5 && gender === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Kofii";
    
}
else if(answer === 6 && gender === "Male"){
    document.getElementById("demo").innerHTML = "Your Akan name is Kwame";
    
}  


        else if(answer === 0 && gender === "Female"){
           document.getElementById("demo").innerHTML = "Your Akan name is Akosua" ;
           
        }
        else if(answer === 1 && gender === "Female") {
            document.getElementById("demo").innerHTML = "Your Akan name is Adwoa"; 
        }
        else if(answer === 2 && gender === "Female"){
            document.getElementById("demo").innerHTML = "Your Akan name is Abenaa";  
        }
        else if(answer === 3 && gender === "Female"){
            document.getElementById("demo").innerHTML = "Your Akan name is Akua"; 
        }
        else if(answer === 4 && gender === "Female"){
            document.getElementById("demo").innerHTML = "Your Akan name is Yaa"; 
        }
        else if(answer === 5 && gender === "Female"){
            document.getElementById("demo").innerHTML = "Your akan name is Afua"; 
        }
        else if(answer === 6 && gender === "Female"){
            document.getElementById("demo").innerHTML = "Your Akan name is Ama"; 
        }
           
        else{
            document.getElementById("demo").innerHTML ="Please enter correct date of birth and gender";
        }
        return document.getElementById("demo").innerHTML;
    }
    console.log(dayOfTheWeek());
  



