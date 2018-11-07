/*global countSameElements*/
'use strict';

describe('practice-2-2', () => {

  const collection = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];

  it('Counting the same elements in Collection A', () => {

    const result = countSameElements(collection);

    expect(result).toEqual([
      {key: 'a', count: 3},
      {key: 'e', count: 7},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 9},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 5}
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
