var insert-text = document.getElementById('write');
write.addEventListener("keydown", count);

function count() {
    var sizeText =document.getElementById("size-text");
    var limit= 140;
    var length = document.getElementById("write").value.length;
    document.getElementById("size-text").innerHTML= limit-length;

    if(length>=140){
        conter.style.color="green";
        button.disabled=true;
    }
    else if(length>=130){
        conter.style.color="blue";
        button.disabled=true;
    }
    else if(length>=120){
        conter.style.color="orange";
        button.disabled=false;
    }
    else{
        conter.style.color="orange";
        button.disabled = false;
    }
};
var button = document.getElementById("button");
button.disabled= true;
button.addEventListener("click",submit);
