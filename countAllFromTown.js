
export default function countAllFromTown(regNumber,location){
    var number = regNumber.split(",");
    console.log(number);
    var anyTown = [];

      if(regNumber !== ""){
    for (var i=0;i<number.length;i++){
      if (number[i].trim().startsWith(location)){
        anyTown.push(number[i].trim())
      }
    }return anyTown.length;
  }
  else{
    return "no registration number entered"
  }
  }