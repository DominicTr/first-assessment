


document.getElementById("buttonclose").addEventListener("click", function(){
	document.getElementById("menu").style.left="-110px";
});
document.getElementById("buttonopen").addEventListener("click", function(){
	document.getElementById("menu").style.left="0px";
});
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "none";
});
document.getElementById("makeBG").addEventListener("click", function(){
    document.getElementById("bg").style.backgroundImage = "url(imgs/i" + img + ".jpg)";
});
document.getElementById("show").addEventListener("click", function(){
    document.getElementById("app1").style.display = "block";
});
document.getElementById("hide").addEventListener("click", function(){
    document.getElementById("app1").style.display = "none";
});
