'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionResult = [];
  var k = 0;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collectionB.length; j++) {
        if(collectionA[i] == collectionB[j]) {
          collectionResult[k] = collectionA[i];
          k++;
        }
      }
    }
    console.log(collectionResult);
    return collectionResult;
}