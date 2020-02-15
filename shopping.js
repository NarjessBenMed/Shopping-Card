
let removes_buttons = document.querySelectorAll(".css-i6dzq1");

for (let i = 0; i< removes_buttons.length; i++)
{
    removes_buttons[i].addEventListener("click",function(e)
    {
      
        e.currentTarget.parentElement.parentElement.remove();
     
        total_Price();
           
    })
   
}







/************************  Incrementer la quantité ****************************** */




function addQuantity(e) {
  let itemQuantity = e.target.parentElement.children[1];
  itemQuantity.textContent = Number.parseInt(itemQuantity.innerHTML) + 1;
  total_Price();
}




let adds= document.getElementsByClassName("feather-plus-circle");
 
 


for (let i=0; i < adds.length; i++)


{
    adds[i].addEventListener("click", addQuantity );
  
}



/************************  décrimenter la quantité ****************************** */


function reduceQuantity(e) {
  let itemQuantity = e.target.parentElement.children[1];
  if(itemQuantity.innerHTML!=0)
  itemQuantity.textContent = Number.parseInt(itemQuantity.innerHTML) - 1;
  total_Price();
}



let Mins= document.getElementsByClassName("feather-minus-circle");
 
 
for (let i=0; i< Mins.length; i++)


{
    Mins[i].addEventListener("click", reduceQuantity);
  
  
}

/***********************************  calcul total ****************************** */



  function  total_Price()
  {
let tab_label_qte=document.getElementsByClassName("qte");

let tab_label_price= document.getElementsByClassName("price");
let total_price=0;


for (let i=0; i<tab_label_price.length; i++ )

{

let p=tab_label_price[i].innerText.replace('$','');
let q= tab_label_qte[i].innerText;
total_price += Number(p )* Number(q);


}

document.getElementById("TPrice").innerHTML=total_price +'$';

}



/***********************   like article *****************************/

let tab_heart=  document.getElementsByClassName("feather-heart");

for (let i=0; i< tab_heart.length;i++)

tab_heart[i].addEventListener("click",add_favorite); 





function add_favorite(e)

{
e.currentTarget.classList.toggle("heart");

}











