var score = 0;


function opp(){

    "use strict";


    var x = parseInt( document.getElementById("in1").value);
        
    //  var x1 = parseInt(x);
    var y =  parseInt(document.getElementById("in2").value);
    //  var y1 = parseInt(y);
        
    var res = x + x ;
    /*if(x ==NaN){
        alert("entrez un nombre");
    }*/
    if(res == y){
        document.getElementById("demoo").innerHTML = "you are right";
        document.getElementById("demoo").style.color = "#f1c40f";
        score++;
        setTimeout(function(){
            document.getElementById("in1").value = res;
            document.getElementById("in2").value = 0;
        },500);

    }else{
        document.getElementById("demoo").innerHTML = "you are wrong";
        document.getElementById("demoo").style.color = "#2ecc71";

        score = 0;
    }
        

    document.getElementById("score").innerHTML = score;
    console.log(x);
    console.log(y);
    x = 55;
    y = 0;
    console.log(x);
    console.log(y);




}


function v(){
    
    document.getElementById("in1").value = 0;
    document.getElementById("in2").value = 0;
    document.getElementById("demoo").innerHTML = "";
    score = 0;
    document.getElementById("score").innerHTML = null;



 }


