var div1 = document.querySelector("#img1")
var div2 = document.querySelector("#img2")
var div3 = document.querySelector("#img3")
var div4 = document.querySelector("#img4")
var div5 = document.querySelector("#img5")

var list = [div1, div2, div3, div4, div5]

function addListen(x){
    console.log(x.src)
    x.addEventListener("mouseover", function(){
        document.getElementById("display").src = x.src;
    }, false)
}


for (let i = 0; i < list.length; i++) {
    addListen(list[i])
}

