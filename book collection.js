let prices = [20,20,20,20,20,20,20,20,20,20,20,20,17,17,17,17,17,17];
const buttons = document.querySelectorAll(".gridbutton");
let total =0;

for(let x=0; x<buttons.length; x++){
    buttons[x].addEventListener("click", (e)=> {
        if(buttons[x].innerHTML=="Buy For 20$" || buttons[x].innerHTML=="Buy For 17$" ) {
            total += prices[x];
            localStorage.setItem("Total", total + "$");
            localStorage.setItem(buttons[x].name, buttons[x].getAttribute('data-price'));
            buttons[x].innerText= "Remove";
            buttons[x].style.backgroundColor = "#3C2A21";
            buttons[x].style.color = "#FfD9A9";
            
        } else{
            total -= prices[x];
            localStorage.setItem("Total", total + "$");
            localStorage.removeItem(buttons[x].name);
            buttons[x].innerText = "Buy For " + prices[x]+"$";
            buttons[x].style.backgroundColor = "#FfD9A9";
            buttons[x].style.color = "#192719";
            
        }
    }
    
    
    
    
    
    );
}