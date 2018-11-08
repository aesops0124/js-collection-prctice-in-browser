'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionA_values = collectionA.map(a => a.key);
  console.log(collectionA_values);
  const collectionB_values = Object.values(objectB);
  console.log(collectionB_values);
  const collectionResult = [];
  var m = 0;
  for (var i = 0; i < collectionA_values.length; i++) {
    for (var j = 0; j < collectionB_values.length; j++) {
      for (var k = 0; k < collectionB_values[j].length; k++){
        if(collectionA_values[i] == collectionB_values[j][k]) {
          collectionResult[m] = collectionA_values[i];
          m++;
        }
      }
    }
  }
  console.log(collectionResult);
  return collectionResult;
}