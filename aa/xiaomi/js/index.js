/*
* @Author: Administrator
* @Date:   2017-11-07 16:42:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-26 19:21:44
*/
window.onload=function(){

var list2=document.getElementsByClassName("list2")[0];
var li=list2.getElementsByTagName("li");
var itam=document.getElementsByClassName("itam");
console.log(list2,li,itam)

for(var i=0;i<li.length;i++)
{    
   li[i].index=i;

   li[i].onmouseover=function()
   {
   	  itam[this.index].style.display="block";
   }
   li[i].onmouseout=function()
   {
   	itam[this.index].style.display="none";
   }
}

var sideli=document.getElementsByClassName("sideli")
var navlist=document.getElementsByClassName("nav2list1")
var nav2list=document.getElementsByClassName("nav2list")
console.log(sideli,navlist)

for(let i=0;i<sideli.length;i++)
{  


   sideli[i].onmouseover=function()
   {  
   	 navlist[0].className="nav2list1 nav2list1op"

       for(let j=0;j<sideli.length;j++){
           nav2list[j].style.display="none"
       }
       nav2list[i].style.display="flex"
   }
   sideli[i].onmouseout=function()
   {
   	
   	navlist[0].className="nav2list1 "
   	
   }
   navlist[0].onmouseover=function()
   {
  	 navlist[0].className="nav2list1 nav2list1op"
      
   }
   navlist[0].onmouseout=function()
   {
   		navlist[0].className="nav2list1"
   }


}
 

let touright2=document.getElementsByClassName("touright2")[0];
let gouwuCheft=document.getElementsByClassName("gouwuCheft")[0];

touright2.onmouseover=function(){
     
    gouwuCheft.style.height="98px"
   gouwuCheft.innerText="购物车中还没有商品，赶紧选购吧！"
}
touright2.onmouseout=function(){
    gouwuCheft.innerText="";   
    gouwuCheft.style.height="0px"
}
gouwuCheft.onmouseover=function(){
   
    gouwuCheft.style.height="98px"
     gouwuCheft.innerText="购物车中还没有商品，赶紧选购吧！"
}
gouwuCheft.onmouseout=function(){
 
    gouwuCheft.style.height="0px"
    gouwuCheft.innerText=""
}

// var jiadianright=document.getElementsByClassName("jiadianright")
// var h4li=document.getElementsByClassName("h4li1")
// console.log(jiadianright,h4li)
// for(let i=0;i<h4li.length;i++)
// {

// 	h4li[i].onmouseover=function()
// 	{
// 	 jiadianright[i].style.display="block";
// 	}
// 	h4li[i].onmouseout=function()
// 	{
// 	 jiadianright[i].style.display="none";
// 	}
// }
// 
let h2p=document.getElementsByClassName("h2p")[0];
 // let li2=h2p.getElementsByTagName("li");
 let xuanbox=document.getElementsByClassName("xuanbox");
 // console.log(h2p,li2,xuanbox)

 // for(let i=0;i<li2.length;i++)
 // {
 //   li2[i].onmouseover=function()
 //   {
 //   	  xuanbox[i].style.display="block";
 //   }
 //   li2[i].onmouseout=function()
 //   {
 //   	xuanbox[i].style.display="none";
 //   }
 //   
    
     // for(let i=0;i<li2.length;i++)
     // {  
     // 	li2[i].onmouseover=function()
     // 	{
     //        for(let j=0;j<li2.length;j++)
     //        {
     //        	xuanbox[j].className="xuanbox";
     //        	li2[j].className="";
     //          li2[j].style.border="";
     //        }
             
     //        xuanbox[i].className="xuanbox firot";
     //        li2[i].className="lihover";

     // 	}

     // }
// var ul1=document.getElementsByClassName("ul1")[0]
// var lis=ul1.getElementsByClassName("banna1")
// var ul0=document.getElementsByClassName("list0")[0]
// var dian=ul0.getElementsByClassName("dian")
// var you=document.getElementsByClassName("you")[0]
// var banner=document.getElementsByClassName("banna")[0]

// let t=setInterval(fn,2500);
// banner.onmouseover = function()
// {
// 	clearInterval(t)
// }
// banner.onmouseout=function()
// {
// 	t=setInterval(fn,2500);
// }

// let num=0;
// function fn(){
// 	num++;
// 	  if(num==lis.length)
// 	  {
// 	  	num=0;
// 	  }


//      for(let i=0;i<lis.length;i++)
//      {
//      	lis[i].style.display="none";
//         dian[i].style.background=""

//      }

//     lis[num].style.display="block";
//       dian[num].style.background="white"
// }
// you.onclick=fn

// var zuo=document.getElementsByClassName("zuo")[0];

// function fn1(){
//     num--;
//      if(num==-1)
//      {
//      	num=lis.length-1;
//      }

//     for(let i=0;i<lis.length;i++)
//     {
//     	lis[i].style.display="none";
//         dian[i].style.background=""
//     }
//     lis[num].style.display="block"
//     dian[num].style.background="white"
// }
// zuo.onclick=fn1;





// 	for(let i=0;i<lis.length;i++){

// 		dian[i].onclick=function()
//     {  

//        lis[num].style.display="none";
//        lis[i].style.display="block";
//         dian[num].style.background="";
//         dian[i].style.background="white";
//          num=i
// 	}
     
// }



var bnli=document.getElementsByClassName("banna1");
var dian=document.getElementsByClassName("dian");
var back=document.getElementsByClassName("you")[0];
var forward=document.getElementsByClassName("zuo")[0];
var banner=document.getElementsByClassName("banna")[0];
let t=setInterval(fn,3500)
let flag=true;
let num=0;
banner.onmouseenter=function(){
  
   clearInterval(t);

}
banner.onmouseleave=function(){
   t=setInterval(fn,3500)
}
function fn(){


	num=num+1;
	if(num==bnli.length)
	{
		num=0;
	}

for(let i=0;i<bnli.length;i++)
{
  // animate(bnli[i],{opacity:0,zIndex:1300},0,function(){
  //   flag=true;
  // })
	bnli[i].style.cssText="opacity: 0;z-index: 1300;";
    dian[i].style.background="";
}
 animate(bnli[num],{opacity:1,zIndex:1500},1000,function(){
    flag=true;
  })
   // bnli[num].style.cssText="opacity: 1;z-index: 1500;transition: 1s;";
   dian[num].style.background="white";

     // flag=true;

  

}
back.onclick=function(){
     if(flag){
       flag=false;
       fn();
     }
       
    
}


function fns(){

num=num-1;
if(num<0)
{
	num=bnli.length-1
}
for(let i=0;i<bnli.length;i++)
{
	 // animate(bnli[i],{opacity:0,zIndex:1300},0,function(){
  //   flag=true;
  // })
    bnli[i].style.cssText="opacity: 0;z-index: 1300;";
    dian[i].style.background="";
}
 animate(bnli[num],{opacity:1,zIndex:1500},1000,function(){
    flag=true;
})
 dian[num].style.background="white";




}
forward.onclick=function(){
    if(flag){
      flag=false;
      fns();
        
    }
}







for(let i=0;i<bnli.length;i++)
{   
    dian[i].onclick=function()
    { bnli[num].style.cssText="opacity: 0;z-index: 1300;";  
        // bnli[num].className="banna1"
        dian[num].style.background="";
     // bnli[i].className="banna1 boty";
     bnli[i].style.cssText="opacity: 1;z-index: 1500;transition: 1s;"; 
     dian[i].style.background="white";
            
             num=i;
    }


}



let h5h=document.getElementsByClassName("h5h");
let jdli=document.getElementsByClassName("jdli");
for(let i=0;i<jdli.length;i++){
jdli[i].onmouseover=function() {
    
     for(let j=0;j<jdli.length;j++){
        h5h[j].style.display="none"
        jdli[j].className="jdli"
     }

      h5h[i].style.display="block"
       jdli[i].className="jdli hot"
  }
}



let jdli1=document.getElementsByClassName("jdli1");
let h5h1=document.getElementsByClassName("h5h1")
for(let i=0;i<jdli1.length;i++){
jdli1[i].onmouseover=function() {
    
     for(let j=0;j<jdli1.length;j++){
        h5h1[j].style.display="none"
        jdli1[j].className="jdli1"
     }

      h5h1[i].style.display="block"
       jdli1[i].className="jdli1 hot"
  }
}
let jdli2=document.getElementsByClassName("jdli2");
let h5h2=document.getElementsByClassName("h5h2")
for(let i=0;i<jdli2.length;i++){
jdli2[i].onmouseover=function() {
    
     for(let j=0;j<jdli2.length;j++){
        h5h2[j].style.display="none"
        jdli2[j].className="jdli2"
     }

      h5h2[i].style.display="block"
       jdli2[i].className="jdli2 hot"
  }
}
let jdli3=document.getElementsByClassName("jdli3");
let h5h3=document.getElementsByClassName("h5h3")
for(let i=0;i<jdli3.length;i++){
jdli3[i].onmouseover=function() {
    
     for(let j=0;j<jdli3.length;j++){
        h5h3[j].style.display="none"
        jdli3[j].className="jdli3"
     }

      h5h3[i].style.display="block"
       jdli3[i].className="jdli3 hot"
  }
}

let jdli4=document.getElementsByClassName("jdli4");
let h5h4=document.getElementsByClassName("h5h4")
for(let i=0;i<jdli4.length;i++){
jdli4[i].onmouseover=function() {
    
     for(let j=0;j<jdli4.length;j++){
        h5h4[j].style.display="none"
        jdli4[j].className="jdli4"
     }

      h5h4[i].style.display="block"
       jdli4[i].className="jdli4 hot"
  }
}
let jdli5=document.getElementsByClassName("jdli5");
let h5h5=document.getElementsByClassName("h5h5")
for(let i=0;i<jdli5.length;i++){
jdli5[i].onmouseover=function() {
    
     for(let j=0;j<jdli5.length;j++){
        h5h5[j].style.display="none"
        jdli5[j].className="jdli5"
     }

      h5h5[i].style.display="block"
       jdli5[i].className="jdli5 hot"
  }
}










let boxmain=document.getElementsByClassName("boxmain")[0];
let hezi=document.getElementsByClassName("hezi");
let left1=document.getElementsByClassName("zuoxia")[0];
let right1=document.getElementsByClassName("zuoxia1")[0];
console.log(boxmain,left1,right1)
// box   width  20*(width+marginRight)
//       childElementCount;获取个数
//       获取第一个孩子的长度.offsetWidth+margin-right
//       parseint    getcomputstyle
//       box.style.width='${count*childW}px'
let nums=0;  
let nummb=boxmain.childElementCount 
console.log(boxmain.childElementCount);

let firstwidth=hezi[0].offsetWidth+parseInt(getComputedStyle(hezi[0],null).marginRight)
console.log(firstwidth);

boxmain.style.width=`${firstwidth*nummb}px`


right1.onclick=function(){
  if(nums!=1){
     nums++;
   left1.style.color="#666"; right1.style.color="#e0e0e2";
    boxmain.style.transform=("translateX("+nums*-1240+"px)")
   }
}
left1.onclick=function(){
  if(nums!=0){
     nums--;  
   right1.style.color="#666";left1.style.color="#e0e0e2";
    boxmain.style.transform=("translateX("+nums*1240+"px)")
   }
}


function fns1(){

      if(nums!=1){
     nums++;
   left1.style.color="#666"; right1.style.color="#e0e0e2";
    boxmain.style.transform=("translateX("+nums*-1240+"px)")
   }

}
function fns2(){

  if(nums!=0){
     nums--;  
   right1.style.color="#666";left1.style.color="#e0e0e2";
    boxmain.style.transform=("translateX("+nums*1240+"px)")
   }
}
setInterval(fns1,6500)
setInterval(fns2,13000)







function aa(vae){

let ner=document.getElementsByClassName("nei")[vae]
let nav=ner.getElementsByClassName("neili");
let left=document.getElementsByClassName("ce1")[vae];
let right=document.getElementsByClassName("ce2")[vae];

let ul=document.getElementsByClassName("quan")[vae];

let dians=ul.getElementsByTagName("li");
console.log(dians,right,left,nav,ul)

let now=0;
let next=0;

right.onclick=function()
{   
  if(flag){
      
    if(next!=dians.length-1)
    {  
        
        next++;
        flag=false;
      
    
       
       animate(nav[now], {left:"-296"},function(){
        for(let i=0;i<dians.length-1;i++)
      {
        dians[i].style.background="#ccc";
        dians[now].style.background="#fff";

      }
       
         flag=true;
       });
       animate(nav[next], {left:"0"})
    
      
       now=next;
       
       }
      }   
          
}
left.onclick=function()
{
   if(flag){
   
  if(next!=0)
  {  
     
   next--;
    flag=false;
   // nav[next].style.left="-296px";
   animate(nav[now], {left:"296"},function(){
        for(let i=0;i<dians.length;i++)
      {
        dians[i].style.background="#ccc";
        dians[now].style.background="#fff";
      }
       flag=true;

       });
   animate(nav[next],{left:"0"});

   now=next;
    
 }
 }

}
for(let i=0;i<dians.length;i++)
{
  dians[i].onclick=function(){
   
       if(now==i)
       {
            return;
       }
       else if(i<now)
       {     nav[i].style.left="0"
             nav[now].style.left="296px";
             dians[i].style.background="white";
             dians[now].style.background="#ccc"; 
       }
       else if(i>now)
      {     nav[i].style.left="0"
             nav[now].style.left="-296px";
             dians[i].style.background="white";
             dians[now].style.background="#ccc"
             
            
       }
     next=now=i;   

   
  }
}


}
aa(0);
aa(1);aa(2);aa(3);




}










