
window.onload = function () {
    let bannerpic = document.getElementsByClassName("bannerpic")[0];
    let bpcli = bannerpic.getElementsByClassName("bntli");
    let bannerlist = document.getElementsByClassName("bannerlist")[0];
    let listli = bannerlist.getElementsByClassName("listli")
    let banner = document.getElementsByClassName("banner")[0];
    console.log(bannerpic, bpcli, listli)
    let t = setInterval(fn, 2500)
    banner.onmouseover = function () {
        clearInterval(t)
    }
    banner.onmouseout = function () {
        t = setInterval(fn, 2500)
    }
    var num = 0;

    function fn() {
        num++
        if (num == bpcli.length) {
            num = 0;
        }
        for (let i = 0; i < bpcli.length; i++) {
            bpcli[i].style.opacity = "0"
            bpcli[i].style.zIndex = "5";
            listli[i].style.backgroundColor = "#666";


        }
        bpcli[num].style.opacity = 1;
        bpcli[num].style.zIndex = "8";
        listli[num].style.backgroundColor = "white";
    }

    for (let i = 0; i < bpcli.length; i++) {
        listli[i].onmouseover = function () {
            bpcli[num].style.opacity = 0;
            bpcli[num].style.zIndex = "5";
            listli[num].style.backgroundColor = "#666";
            bpcli[i].style.opacity = 1;
            bpcli[i].style.zIndex = "8";
            listli[i].style.backgroundColor = "white";


            num = i;
        }

    }

    let ac = document.getElementsByClassName("ac")
    let srtli = document.getElementsByClassName("srtli")

    for (let i = 0; i < srtli.length; i++) {
        srtli[i].onmouseover = function () {
            ac[i].style.display = "block";
        }
        srtli[i].onmouseout = function () {
            ac[i].style.display = "none";
        }

        ac[i].onmouseover = function () {
            srtli[i].style.background = "white";
            ac[i].style.display = "block";
        }
        ac[i].onmouseout = function () {
            srtli[i].style.background = "";
            ac[i].style.display = "none";
        }


    }

    let ce1 = document.getElementsByClassName("ce")[0];
    let celi = ce1.getElementsByTagName("li");
    let sideade = document.getElementsByClassName("sideade");

    for (let i = 0; i < celi.length; i++) {
        celi[i].onmouseover = function () {
            sideade[i].style.display = "block"
        }
        celi[i].onmouseout = function () {
            sideade[i].style.display = "none"
        }
    }
    let up = false;
    let down = true;
    window.onscroll = function () {
        let fitop=document.querySelectorAll(".fi-top")[0]

        let topss = document.body.scrollTop == 0 ? document.documentElement : document.body
        let objs = topss.scrollTop
        console.log(objs)
        let chaoshi = document.querySelectorAll(".chaoshi")
        let filift = document.querySelectorAll(".fi-lift")[0]
        if (objs > chaoshi[0].offsetTop - 500) {
            if (down) {
                down = false;
                // filift.classList.add("activea")
                animate(filift, {width: 35, height: 370}, 200, Tween.Quad.easeIn, function () {
                    up = true;
                })
                animate(fitop, {top:0}, 200, Tween.Quad.easeIn, function () {
                    up = true;
                })
            }
        } else {
            if (up) {
                up = false;
                animate(filift, {width: 0, height: 0}, 200, Tween.Quad.easeIn, function () {
                    down = true;
                })
                animate(fitop, {top:-50}, 200, Tween.Quad.easeIn, function () {
                    down = true;
                })
                // filift.classList.remove("activea")
            }
        }
       

            let leftbox = document.querySelectorAll(".F4 li")
            let nn;
            let arraa = ["#64C333", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000"]

            chaoshi.forEach(function (val, index) {

                if (objs > val.offsetTop - 200) {
                    for(let i=0;i<leftbox.length;i++)
                    {
                        leftbox[i].style.background = "";
                    }
                    leftbox[index].style.background = arraa[index];
                        nn=index;
                }
               leftbox.forEach(function(a,b){
                a.onclick=function () {
                    animate(document.documentElement,{scrollTop:chaoshi[b].offsetTop-60})
                    animate(document.body,{scrollTop:chaoshi[b].offsetTop-60})
                }

               })




            })
          let dingbu=document.querySelectorAll(".xiao10")[0];
          dingbu.onclick=function () {
              animate(document.body,{scrollTop:0},300)
              animate(document.documentElement,{scrollTop:0},300)
          }



    }
}