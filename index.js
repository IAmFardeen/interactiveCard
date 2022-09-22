var setValue=true;

$("input").click(function(){
  $(this).addClass("after-click");
  setTimeout( function(){
    $(this).removeClass("after-click")},200);
 
  console.log("why remove class is not working")
})

$("#form").submit(function(event){
  // for cardName
  var cardHolderName=document.querySelector("#cardHolderName").value;
     if(cardHolderName.match(/[a-z]/i)){
      if(cardHolderName.length>20 || cardHolderName.length<3){
        $("#error").text("Please take care of Your Name").addClass("validity")
        $("#cardHolderName").addClass("border-color")
             setValue=false;
      }
     }
     else{
      $("#error").text("Please keep in mind the format").addClass("validity");
      setValue=false;
      
     }
    //  for cardNumber
     var cardNumber=document.querySelector("#cardNumber").value;
     console.log(cardNumber);
     if(cardNumber.length!=16){
      $("#error2").text("Please Enter 16 digit Number").addClass("validity")
      $("#cardNumber").addClass("border-color")
      setValue=false;
     }
    
    //  for month and year

    var cardMonth=document.querySelector("#month").value;
    var cardYear=document.querySelector("#year").value;

    if(cardMonth.length<2 || cardMonth.length>2 ){
      $("#error3").text("Enter 2 digits for Month").addClass("validity");
      $("#month").addClass("border-color")
      setValue=false;
    }

    if(cardYear.length<2 || cardYear.length>2){
      console.log(cardYear);
      $("#error3").text("Enter 2 digits for Year").addClass("validity");
      $("#year").addClass("border-color")
      setValue=false;
    }

    // for cvc
    var cardCvv=document.querySelector("#cvc").value;
    if(cardCvv.length!=3){
      $("#error3").text("Enter 3 digits for cvc").addClass("validity");
      $("#cvc").addClass("border-color")
      setValue=false;
    }

     $(".cardName").text(cardHolderName);
     $(".cardNumber").text(cardNumber);
     $(".cardMonth").text(cardMonth);
     $(".cardYear").text(cardYear);
     $(".cvv").text(cardCvv);
    
     if(setValue==false){
     event.preventDefault();
      document.querySelector("#cardHolderName").empty();
      document.querySelector("#cardNumber").empty();
      document.querySelector("#month").value("");
      document.querySelector("#year").value("");
      document.querySelector("#cvc").value("");

    }
    else{
      alert("All values is submitted");
    }
    event.preventDefault();
    
})
