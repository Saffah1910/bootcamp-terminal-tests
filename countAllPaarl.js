export default function countAllPaarl(regNumber){
  var number = regNumber.split(", ");
  console.log (number);
  var paarl = [];
  if(regNumber !== ""){
    for (var i=0;i<number.length;i++){
      if (number[i].startsWith("CJ")){
        paarl.push(number[i]);
      }
    }
      return paarl.length
  }
  else{
      return "no registration number entered"
    }
}
