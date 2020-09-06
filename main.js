

 function myFunction(){
   var hei=document.getElementById("hei").value;
   var weight =document.getElementById("weight").value;
    var heit = (hei/100);
    var r = weight/((heit)^2);
    r= r.toFixed(2);
   
    document.getElementById("result1").innerHTML= + "" + r + "="+" مؤشر كتلة الجسم    ";
 if(r<18)
 {
   document.getElementById("res11").innerHTML= " اقل من الوزن الطبيعي";


 }
 if(r>=18 && r<24.9)
 {
   document.getElementById("res11").innerHTML= "   الوزن طبيعي";


 }

 if(r>=25&& r <29.9)
 {
   document.getElementById("res11").innerHTML= "   سمنة";


 }
 if(r>=30&& r <34.9)
 {
   document.getElementById("res11").innerHTML= "    سمنة من الدرجة الاولى";

 }

 if(r>=35&& r <39.9)
 {
   document.getElementById("res11").innerHTML= "    سمنة من الدرجة الثانية ";

 }
 if(r>=40)
 {
   document.getElementById("res11").innerHTML= "    سمنة مفرطة ";

 }
 }

 
 function fun2(){
   var male=document.getElementById("male").checked;
   var female=document.getElementById("female").checked;

   if(male== false && female==false)
   {
      alert("الرجاء اختيار الجنس ");
   }

   else if ( male== true && female==false)
   {
      var age=document.getElementById("amor").value;
      var hei=document.getElementById("tol").value;
      var weight =document.getElementById("waz").value;
   var w=(weight*10);
   var h=(hei)*(6.25);
   var a=(age*5);
   var avarge1=((w+h)-(a+5));
   document.getElementById("result2").innerHTML= "  تحتاج الى  "+ avarge1 + "" + "" + " سعرة حرارية باليوم ";
  }

else if(female== true && male==false) 

{
   var age=document.getElementById("amor").value;
   var hei=document.getElementById("tol").value;
   var weight =document.getElementById("waz").value;
   var w=(weight*10);
   var h=(hei)*(6.25);
   var a=(age*5);
   var avarge1=((w+h)-(a+161));
   document.getElementById("result2").innerHTML=  "  تحتاجين الى  "+ avarge1 + " \ " + " " + " سعرة حرارية باليوم " ;
  } 
}
function myFunction2(){
var food1=document.getElementById("fod1").checked;
var food2=document.getElementById("fod2").checked;
var food3=document.getElementById("fod3").checked;
var food4=document.getElementById("fod4").checked;
var food5=document.getElementById("fod5").checked;
var food=document.getElementById("fod6").checked;

var dec=document.getElementById("dec").checked;
var inc=document.getElementById("inc").checked;
var bild=document.getElementById("bild").checked;
var mybutton=document.getElementById("mybutton");
 
if(food1==true && dec==true){
  
window.location="seefoodinc.html";

}
else if (food1==true && inc==true){

  window.location="seafooddec.html";
}

else if (food1==true &&  bild==true){

  window.location="seafoodbild.html";
}
else if (food2==true &&  dec==true){

  window.location="nutsinc.html";
}
else if (food2==true &&  inc==true){

  window.location="nutsdec.html";
}
else if (food2==true &&  bild==true){

  window.location="nutsbild.html";
}

}

