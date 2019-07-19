var YY = document.getElementById("years").value;
var MM = document.getElementById("months").value;
var DD = document.getElementById("days").value;
//var CC = document.getElementById("date").value;
var gender = document.getElementById("gender").value;
var male = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];
var female = [Akosua, Adwoa, Abenaa, Akua, Yaa, Afua,Ama];
var day = new Date();
day = day.getDay();

// var dayOfTheWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
// dayOfTheWeek.toFixed(0);
/*var day = [0,1,2,3,4,5,6];
day = Date();
*/


if(day == 0 && gender == male)
{
    alert("Kwasi");
}
else if(day == 1 && gender == male)
{
    alert("Kwadwo");

}
else if(day == 2 && gender == male)
{
    alert("Kwabena");

}
else if(day == 3 && gender == male){
    alert("Kwaku");
}
else if(day== 4 && gender == male){
    alert("Yaw");
}
else if(day == 5 && gender == male){
    alert("Kofii");
}
else if(day == 6 && gender == male){
    alert("Kwame");
}
else{
    alert("enter correct date of birth and gender");
}
function dayOfTheWeek(){
    for(i = 0; i >= male.length; i++){
          return male[i];  //││ female.length;
    }
    for(i = 0; i >= female.length; i++){
        return male[i];  //││ female.length;
  }
    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
}
