'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = expand(collectionA);
  let objectB_value = objectB.value;
  for(var i=0; i<objectB_value.length; i++){
    for (var j=0; j<result.length; j++){
      if (result[j]['key']==objectB_value[i]) {
        if(result[j]['count']/3<1) {
        }
        else {
          result[j]['count']=result[j]['count']-Math.floor(result[j]['count']/3);
        }
      }
    }
  }
  return result;
}

function expand(collection){
  let result = [];
  for(let item of collection){
    let obj = finds(result,item);
    if(obj){
      obj.count++;
    }else{
      result.push({key: item, count: 1});
    }
  }
  return result;
}

function finds(collection,ch){
  for(let item of collection){
    if(item.key === ch){
              return item;
    }
  }
  return null;
}