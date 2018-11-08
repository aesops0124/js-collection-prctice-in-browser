'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionB_values = Object.values(collectionB);
  const collectionResult = [];
  var m = 0;
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB_values.length; j++) {
      for (var k = 0; k < collectionB_values[j].length; k++){
        if(collectionA[i] == collectionB_values[j][k]) {
          collectionResult[m] = collectionA[i];
          m++;
        }
      }
    }
  }
  console.log(collectionResult);
  return collectionResult;
}
