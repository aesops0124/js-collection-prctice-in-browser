'use strict';


function summarize(array){ // Re-use Practice 1
  let result = [];
  for(let item of array){
    let obj = finds(result,item);
    if(obj){
      obj.count++;
    }else{
      result.push({key: item, count: 1});
    }
  }
  console.log(result);
  return result;               
}
function finds(collection,ch){ // Re-use Practice 1
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}

function split(ch){
  let array = ch.split("-");
  return {key:array[0], count:parseInt(array[1],10)};
}
function push(result,key,count){
  for(var i=0; i<count; i++){
            result.push(key); 
  }   
}
function expand(collection){ //To transfrom d-5 to "d","d","d","d","d"
  let result = [];
  for(let item of collection){
    if(item.length > 1){
      let {key,count} = split(item); 
      push(result,key,count);
    }else{
      result.push(item);
    }           
  }
  return result;
}
function countSameElements(collection) {
  let array = expand(collection);
  console.log(array);
  return summarize(array);
}
