var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

var productImg = document.getElementById("productimgmain");
var subImg = document.getElementsByClassName("subimg");
subImg[0].onclick = function(){
    productImg.src = 'images/gallery-1.jpg';
}
subImg[1].onclick = function(){
    productImg.src = 'images/gallery-2.jpg';
}
subImg[2].onclick = function(){
    productImg.src = 'images/gallery-3.jpg';
}
subImg[3].onclick = function(){
    productImg.src = 'images/gallery-4.jpg';
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}