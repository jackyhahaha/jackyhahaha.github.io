window.onload=function(){
    var point1=document.getElementsByClassName("point1")[0];
    var point2=document.getElementsByClassName("point2")[0];
    var lunbo=document.getElementsByClassName("lunbo")[0];
    var precircle=document.getElementsByClassName("circleleft")[0];
    var nextcircle=document.getElementsByClassName("circleright")[0];

    var i=0;
    point1.style.backgroundColor="white";
    var arr=["img/computer4.jpg","img/lunbo1.jpg"];
    setInterval(function(){
  lunbo.style.backgroundImage="url("+arr[i]+")";
        if(i==0){
            point1.style.backgroundColor="white";
            point2.style.backgroundColor="transparent";

        }
        if(i==1){
            point1.style.backgroundColor="transparent";
            point2.style.backgroundColor="white";
        }


        i++;
        if(i==2){
            i=0;
        }


    },1500)
    precircle.onclick=function(){
        if(i==0){
            i=2
        }
        i--;

        lunbo.style.backgroundImage="url("+arr[i]+")";

    };
    nextcircle.onclick=function(){
        if(i==1){
            i=-1;
        }
        i++;
        lunbo.style.backgroundImage="url("+arr[i]+")";

    }
}