export default function yearsAgo(year){
if(year){

    var theDate = new Date()
    return theDate.getFullYear() - year;
}
return "enter number"

  };