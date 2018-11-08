'use strict';


function summarize(array){ // Re-use Practice 1
  let result = [];
  for(let item of array){
    let obj = finds(result,item);
    if(obj){
      obj.summary++;
    }else{
      result.push({name: item, summary: 1});
    }
  }
  return result;               
}
function finds(collection,ch){ // Re-use Practice 1
  for(let item of collection){
    if(item.name === ch){
              return item;
    }
  }
  return null;
}

function split(ch){
  if(ch.includes("-")){ 
    let array = ch.split("-"); 
    return {name:array[0],summary:parseInt(array[1],10)};
  }
  if(ch.includes(":")){
      let array = ch.split(":");
      return {name:array[0],summary:parseInt(array[1],10)};
  }
  if(ch.includes("[")){
      let name = ch.charAt(0);
      let summary = parseInt(ch.substr(2,ch.length-1));
      return {name,summary};
  }
}
function push(result,name,summary){
  for(var i=0; i<summary; i++){
            result.push(name); 
  }   
}
function expand(collection){ // To transfrom d-5 to "d","d","d","d","d"
  let result = [];
  for(let item of collection){
    if(item.length > 1){
      let obj_split = split(item); 
      push(result,obj_split.name,obj_split.summary);
    }else{
      result.push(item);
    }           
  }
  return result;
}
function countSameElements(collection) {
          let array = expand(collection);
          console.log(summarize(array));
          return summarize(array);
}
