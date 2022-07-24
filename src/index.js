module.exports = function check(str, bracketsConfig) {
let steck = [];
let mas = str.split('');

for (let key of mas){
  for (let i of bracketsConfig){
    if (key===i[0] && key===i[1]){
      if (steck[steck.length-1]===key){
        steck.pop();
      }
      else {
        steck.push(key);
      }
    }
    else {
      if (key===i[0]){
        steck.push(key);
      }
      else if (key===i[1]){
        if (i[0]===steck[steck.length-1])
        steck.pop();
        else {
          steck.push(key);
        }
      }
      else {
        
      }
    }
  }
}
  if (steck.length===0){
    
    return true;
  }
  else {
       return false;
  }
  
}
