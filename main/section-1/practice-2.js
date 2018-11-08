'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionResult = [];
  var m = 0;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collectionB.length; j++) {
        for (var k = 0; k < collectionB[j].length; k++){
          if(collectionA[i] == collectionB[j][k]) {
            collectionResult[m] = collectionA[i];
            m++;
          }
        }
      }
    }
    console.log(collectionResult);
    return collectionResult;
}