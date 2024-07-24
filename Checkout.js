/*اكواد الطباعة*/

let total = 0;

if(localStorage.getItem("Total")!=null){
    total = localStorage.getItem("Total");
    localStorage.removeItem("Total");
}

for(let [key, value] of Object.entries(localStorage)){
    document.getElementById("order").innerHTML += `<span class="keys"> <div>${key} </div> <div>${value}</div> </span>`;
}

document.getElementById("order").innerHTML += `<span class="keys"> <div> <b>Total</b> </div>  <div>${total} </div> </span>`;

document.getElementById("order").innerHTML += `<hr>`;


/*-------------------------------------------------------------*/
/* اكواد الكتابة*/

const btn = document.querySelector(".proceed");

let inputs = document.querySelectorAll(".input");

btn.addEventListener("click", (e)=> {


    let x =1;
    for(let i =0; i< inputs.length; i++){

        if(!inputs[i].checkValidity() || inputs[i].value == ""){
            x=0;
            break;
        } 
    } 

    if(x==1){
        for(let i =0; i< inputs.length; i++){
            document.querySelector(".order").innerHTML += `<span class="keys"> <div>${inputs[i].name} </div> <div>${inputs[i].value}</div> </span>`;
        }
    
        document.querySelector(".order").disabled = true;
        document.querySelector(".proceed").style.backgroundColor="#3C2A21"; 
        document.querySelector(".proceed").style.color="#F5D9A9";
        alert("Payment Suceeded");
    }

    else{
        alert("Wrong or empty inputs")
    }
}


);