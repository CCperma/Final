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


function addEffect(){
    console.log(document.getElementById("display").src)
    if (document.getElementById('effect').value == "blur"){
        if(document.getElementById("display").src == div1.src){
            document.getElementById("display").src = "images/pic1B.jpg"
        }
        if(document.getElementById("display").src == div2.src){
            document.getElementById("display").src = "images/pic2B.jpg"
        }
        if(document.getElementById("display").src == div3.src){
            document.getElementById("display").src = "images/pic3B.jpg"
        }
        if(document.getElementById("display").src == div4.src){
            document.getElementById("display").src = "images/pic4B.jpg"
        }
        if(document.getElementById("display").src == div5.src){
            document.getElementById("display").src = "images/pic5B.jpg"
        }
    }
    else{
        alert("Error, not a valid effect.")
    }
    document.getElementById('effect').value = '';

}
