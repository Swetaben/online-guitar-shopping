/**
 * Created by sweta on 1/22/2018.
 */
var music_src=["1.mp3","2.mp3","3.mp3","4.mp3","5.mp3"]


s2();
function s2(){
    var second=new XMLHttpRequest();
    second.open("GET","resources/data.json",true);
    second.send();
    second.onreadystatechange=function()
    {

        if(second.readyState==4 && second.status==200) {
            obj = JSON.parse(second.responseText);
            obj2 = JSON.stringify(obj);
            //console.log(obj);//when you want object;
            localStorage.setItem("myJson",obj2);
            // localStorage.myJson = obj2;
        }
    }

}

var myJson = JSON.parse(localStorage.getItem("myJson"));
console.log(myJson);

var sources = [];



function initialload(){
   for(var i=0;i<myJson.dict.length;i++){
       sources.push(myJson.dict[i].imgsrc);
   }
    UpdateContent(0);
}

function UpdateContent(number) {
    img = document.getElementById('myimg');
    img.src = sources[number];

    prodname=document.getElementById("prodname");
    //fetch element from html and store it to global variable.
    prodname.innerHTML= myJson.dict[number].name;


    prodprice1=document.getElementById("prodprice");
    prodprice1.innerHTML= "$" + myJson.dict[number].price;

    prodcolor1=document.getElementById("prodcolor");
    prodcolor1.innerHTML= myJson.dict[number].color;

    prodwgt=document.getElementById("prodweight");
    prodwgt.innerHTML= myJson.dict[number].weight;

    prodseller=document.getElementById("prodseller");
    prodseller.innerHTML=myJson.dict[number].seller;

    proditem=document.getElementById("itemno");
    proditem.innerHTML=myJson.dict[number].itemno;

    rname=document.getElementById("r_name");
    rname.innerHTML=myJson.dict[number].reviews[1].name;

    comm=document.getElementById("reviews");
    comm.innerHTML=myJson.dict[number].reviews[1].comment;

    document.getElementById('musicFile').src = 'resources/'+ music_src[number];
    document.getElementById('audioBox').load();
}

var count = 0;

function nextImage() {
    if(count == 4) {
        count = 0;
    }else {
        count++;
    }
    UpdateContent(count);
}

function prevImage() {
    if(count == 0) {
        count = 4;
    }else {
        count--;
    }
    UpdateContent(count);
}


var flagp=false;
function wrapProdInfo(){

    if(!flagp) {
        document.getElementById("wrapprodinfo").style.display = "block";
    }else{
        document.getElementById("wrapprodinfo").style.display = "none";
    }
    flagp=!flagp;
}

var flags=false;
function wrapShipInfo(){
    if(!flags) {
        document.getElementById("wrapshipinfo").style.display = "block";
    }else{
        document.getElementById("wrapshipinfo").style.display = "none";
    }
    flags=!flags;

}

var flagr=false;
function wrapProdReview(){
    if(!flagr) {
        document.getElementById("wrapcustomerreview").style.display = "block";
    }else{
        document.getElementById("wrapcustomerreview").style.display = "none";
    }
    flagr=!flagr;

}

function buybtn(){
    localStorage.setItem("currentGuitar",count);
}