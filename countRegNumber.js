export default function countRegNumber(regCount) {

  if(regCount!==null && regCount!==''){
    var reg = regCount.split(",");

    return reg.length;
  }
  else{
    return "No registartion number was entered"
  }
 

}
// console.log(countRegNumber("CA 182736,CY 523519,CJ 812328"));
console.log(countRegNumber(""))