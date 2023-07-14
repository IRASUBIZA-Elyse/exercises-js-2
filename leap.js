//leap year

function isLeap(year){
  let firstLeap=year%4;
  let secondLeap=year%400;
  if((firstLeap===0)&&(secondLeap===0)){
      return `${year} is a leap year`;
  }else {
      return`${year} is not a leap year`;
  }
}
let year= prompt(`enter a year:`);
let answer = isLeap(year)
console.log(answer);