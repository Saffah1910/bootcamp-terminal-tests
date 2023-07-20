export default function totalPhoneBill(bill){
    var phoneBill = bill.split(", ");
  var total = 0;
   for(var i=0;i<phoneBill.length;i++){
     if (phoneBill[i] === "call"){
       total += 2.75;
   }
     else if(phoneBill[i] === "sms"){
       total += 0.65;
  }
   }
    return ("R")+total.toFixed(2);
  } 