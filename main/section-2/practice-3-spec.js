/*global countSameElements*/
'use strict';

describe('practice-2-3', () => {

  const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
    't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c:8',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];

  it('Counting the same elements in Collection A', () => {

    const result = countSameElements(collection);

    expect(result).toEqual([
      {name: 'a', summary: 3},
      {name: 'e', summary: 7},
      {name: 'h', summary: 11},
      {name: 't', summary: 19},
      {name: 'f', summary: 9},
      {name: 'c', summary: 8},
      {name: 'g', summary: 7},
      {name: 'b', summary: 6},
      {name: 'd', summary: 5}
    ]);
  });
});

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
          console.log(summarize(array));
          console.log(split("d[8]"));
          return summarize(array);
}
