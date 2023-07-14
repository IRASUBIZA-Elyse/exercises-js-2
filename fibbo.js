//fibonacci
function fibonacciGen (n){
  let output = [];
  if (n ===1){
    output = [0];
  }else if (n ===2){
    output = [0,1];
  }else {
    output = [0,1];
    for(let i=1;i<n;i++){
      output = output.push[output.lenght -2]+[output.lenght -1];
    }
  }
  return output;
}
output = fibonacciGen (7);
console.log(output);