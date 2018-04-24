/**
 * Created by sweta on 1/30/2018.
 */
var myJson = JSON.parse(localStorage.getItem("myJson"));

var currentGuitar = localStorage.getItem('currentGuitar');

function loadPage3(){

    img1=document.getElementById("confirmProdImg");
    img1.src=myJson.dict[currentGuitar].imgsrc;
}
