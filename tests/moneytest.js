import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite: formatCurrency');

console.log('convert cents into dollars')//test cases
if(formatCurrency(2000)==20.00){
  console.log('passed');
}else{
  console.log(failed);
}

console.log('works with 0')//test cases:basic case
if(formatCurrency(0)==0.00){
  console.log('passed');
}else{
  console.log(failed);
}

console.log('round upto nearest cents')//test cases:edge case
if(formatCurrency(2000.5)==20.01){
  console.log('passed');
}else{
  console.log(failed);
}