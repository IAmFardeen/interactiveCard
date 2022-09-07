var form= document.getElementById("form");
var cardNumber=document.getElementById("cardNumber");
var cardName=document.getElementById("cardHolderName");
var cardNumberLength = cardNumber.value.length;
var month= document.getElementById("month").value.length;
var cvc= document.getElementById("cvc").value.length;
var year=document.getElementById("year").value.length;
submitOk=true;

form.addEventListener("submit",function(event){
if(cardNumberLength>16){
   alert("Not more than 16");
   cardNumber.classList.add("validity");
   submitOK="false";
}
else if(month>2){
  document.getElementById("month").classList.add(validity)
  submitOK="false";
}
if(submitOK="false"){
  return false;
}
else{
  alert("All fiels are submitted! Thanks")
  event.preventDefault();
}
})