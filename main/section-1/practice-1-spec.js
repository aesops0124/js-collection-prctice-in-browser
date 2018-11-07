/*global collectSameElements*/
'use strict';

describe('practice-1-1', () => {

  var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  var collectionB = ['a', 'd', 'e', 'f'];

  it('Get the same elements both in Collection A and Collection B', () => {

    var result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
 function collectSameElements(collectionA, collectionB) {
  var collectionResult = ['a', 'e', 'f', 'd'];
  var k = 0;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collectionB.length; j++) {
        if(collectionA[i] == collectionB[j]) {
          collectionResult[k] = collectionA[i];
          k++;
        }
      }
    }
    return collectionResult;
}