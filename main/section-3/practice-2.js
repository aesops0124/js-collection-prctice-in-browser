'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let result = collectionA;
  let objectB_value = objectB.value;
  console.log(result[0]['key']);
  for(var i=0; i<objectB_value.length; i++){
    for (var j=0; j<result.length; j++){
      if (result[j]['key']==objectB_value[i]) {
        if(result[j]['count']/3<1) {
        }
        else {
          result[j]['count']=result[j]['count']-Math.floor(result[j]['count']/3);
        }
        console.log(result[j]['count']);
      }
    }
  }
  console.log(result);
  return result;
}
