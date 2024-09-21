function fun(){
    var targetdiv=document.getElementById('navbar14');
    var poe=-1350;
    var anim=setInterval(animate,20);
    function animate(){
        if(poe==0){
             clearInterval(anim);
             document.getElementById('navbar14').style.position="sticky";
        }
        else{
         poe=poe+50;
        targetdiv.style.left=poe+"px";
        }
         }
} 


  
  var poe=-400;
    var poe2=-800;
    var poe3=-1200;
function fun2(){
          if(poe<0){
       var targetdiv=document.getElementsByClassName('nav15img1')[0];
        var anim1=setInterval(animate,5);
        function animate(){
             if(poe==100){
               clearInterval(anim1);
        document.getElementsByClassName('nav15img1')[0].style.left="100px";
    
      }
      else{
         poe=poe+20;
           targetdiv.style.left=poe+"px";
      }
    } 
}
       if(poe2<0){
    var targetdiv1=document.getElementsByClassName('nav15img2')[0];
     var anim2=setInterval(animate1,5);
     function animate1(){
      if(poe2==500){
          clearInterval(anim2);
     document.getElementsByClassName('nav15img2')[0].style.left="500px";
    
      } 
     else{
        poe2=poe2+20;
             targetdiv1.style.left=poe2+"px";
   }
}
       }
       if(poe3<0){
var targetdiv2=document.getElementsByClassName('nav15img3')[0];
 var anim3=setInterval(animate2,5);
 function animate2(){
  if(poe3==900){
      clearInterval(anim3);
 document.getElementsByClassName('nav15img3')[0].style.left="900px";
    }
 else{
    poe3=poe3+20;
         targetdiv2.style.left=poe3+"px";
}
}
}
 }

 var poe4=-400;
 var poe5=-800;
 var poe6=-1200;
 function fun3(){
   if(poe4<0){
      var targetdiv=document.getElementsByClassName('nav15img3-1')[0];
       var anim1=setInterval(animate,5);
       function animate(){
            if(poe4==100){
              clearInterval(anim1);
       document.getElementsByClassName('nav15img3-1')[0].style.left="100px";
   
     }
     else{
        poe4=poe4+20;
          targetdiv.style.left=poe4+"px";
     }
   } 
   }
      if(poe5<0){
   var targetdiv1=document.getElementsByClassName('nav15img3-2')[0];
    var anim2=setInterval(animate1,5);
    function animate1(){
     if(poe5==500){
         clearInterval(anim2);
    document.getElementsByClassName('nav15img3-2')[0].style.left="500px";
   
     } 
    else{
       poe5=poe5+20;
            targetdiv1.style.left=poe5+"px";
   }
   }
      }
      if(poe6<0){
   var targetdiv2=document.getElementsByClassName('nav15img3-3')[0];
   var anim3=setInterval(animate2,5);
   function animate2(){
   if(poe6==900){
     clearInterval(anim3);
   document.getElementsByClassName('nav15img3-3')[0].style.left="900px";
   }
   else{
   poe6=poe6+20;
        targetdiv2.style.left=poe6+"px";
   }
   }
   }
 }
     


