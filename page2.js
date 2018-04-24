/**
 * Created by sweta on 1/24/2018.
 */


var myJson = JSON.parse(localStorage.getItem("myJson"));

var currentGuitar = localStorage.getItem('currentGuitar');



console.log(myJson);
console.log(currentGuitar);

function mypage2(){
    prodname=document.getElementById("prodname");
    prodname.innerHTML= myJson.dict[currentGuitar].name;

    prodprice1=document.getElementById("prodprice");
    prodprice1.innerHTML= "$" + myJson.dict[currentGuitar].price;

    prodcolor1=document.getElementById("prodcolor");
    prodcolor1.innerHTML= myJson.dict[currentGuitar].color;

    prodwgt=document.getElementById("prodweight");
    prodwgt.innerHTML= myJson.dict[currentGuitar].weight;

    img1=document.getElementById("img1");
    img1.src=myJson.dict[currentGuitar].imgsrc;
}

function pg(){
    var fname=document.getElementById("firstname");
    var lname=document.getElementById("lastname");
    var phonenum=document.getElementById("phn");
    var zipp=document.getElementById("zipcode");
    var zipcd=zipp.value;

    var emailid=document.getElementById("eml");
    var card_num=document.getElementById("cardnum");
    var cn=card_num.value;

    var cvvnum=document.getElementById("cvv");
    var cvn;
    cvn = cvvnum.value;

    if(!isNaN(fname.value)|| fname.value==""){


        alert('Please enter Valid Name');

        return false;
    }

    if(!isNaN(lname.value)|| lname.value==""){

        alert('Please enter Valid LastName');
        return false;
    }

    if(isNaN(phonenum.value)||phonenum.value=="" || phonenum.value.length!='10'){

        alert('please eneter valid number!');
        return false;
    }

    if(isNaN(zipcd)||zipcd.length!='5'){
        alert('please enter valid zipcode!');
        return false;
    }

    if(!(emailid.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
        alert("please enter proper email id!");
        return false;
    }




        if(isNaN(cn)||cn.length!='16'){
        alert('please enter valid Card Num!');
        return false;
    }

    if(isNaN(cvn)||cvn.length!='3'){
        alert('please enter valid CVV NUM!');
        return false;
    }

    displayreviewitems();

    document.getElementById("thirdpart").style.display = "none";

    document.getElementById("reviewdetails").style.display = "block";


    return true;
}

function displayreviewitems(){

    var a=document.getElementById("firstname").value;
    document.getElementById("rfname").innerHTML=a;

    var b=document.getElementById("lastname").value;
    document.getElementById("rlname").innerHTML=b;

    var c=document.getElementById("phn").value;
    document.getElementById("rphnnum").innerHTML=c;

    var d=document.getElementById("addr").value;
    document.getElementById("raddr").innerHTML=d;

    var e=document.getElementById("zipcode").value;
    document.getElementById("rzipcode").innerHTML=e;

    var f=document.getElementById("eml").value;
    document.getElementById("remail").innerHTML=f;

    var g=document.getElementById("cardnum").value;
    document.getElementById("rcardnum").innerHTML=g;

    var h=document.getElementById("cvv").value;
    document.getElementById("rcvv").innerHTML=h;


}

function myEdit(){
    document.getElementById("thirdpart").style.display = "block";

    document.getElementById("reviewdetails").style.display = "none";

}

function mySubmit(){

}
