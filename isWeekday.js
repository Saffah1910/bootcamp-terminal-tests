export default function isWeekday(day){
var weekDay = day.startsWith("Mon") || day.startsWith("Tue") || day.startsWith("Wed") || day.startsWith("Thurs") || day.startsWith ("Fri");
return weekDay;
}
// console.log(isWeekday("Saturday"));
// console.log(isWeekday("Sunday"));
// console.log(isWeekday("Monday"));            
// console.log(isWeekday("Tuesday"));              
// console.log(isWeekday("Wednesday"));
// console.log(isWeekday("Thursday"));
// console.log(isWeekday("Friday"));  