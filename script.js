var YY=parseInt(prompt("Enter year of birth"));
var MM=parseInt(prompt("Enter month of birth"));
var DD=parseInt(prompt("Enter your day of birth"));
var CC=parseInt(prompt("Enter century"));
var gender=prompt("enter your gender");
var dayOfTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
dayOfTheWeek.toFixed(0);
var day=[0,1,2,3,4,5,6];
if(day==0&&gender==male)
{
    alert("Kwasi");
}
else if(day==1&&gender==male)
{
    alert("Kwadwo");

}
else if(day==2&&gender==male)
{
    alert("Kwabena");

}
else if(day==3&&gender==male){
    alert("Kwaku");
}
else if(day==4&&gender==male){
    alert("Yaw");
}
else if(day==5&&gender==male){
    alert("Kofi");
}
else if(day==6&&gender==male){
    alert("Kwame");
}

