//biz
function reverseString(str){
  for (let reversedStr = "", i = str.length -1; i >= 0; i --){
    reversedStr += str[i];
  }
  return reversedStr;
}
/*
function forwardString(reversedStr){
  for (let forwardStr = reversedStr, i = )
}
*/

//ui

$(document).ready(function(){
$("#form").submit(function(event){
  let entry1 = $("input#entry1").val();
  
  reverseString(entry1).text();
  event.preventDefault();
  
})
})