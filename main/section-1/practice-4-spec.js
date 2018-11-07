/*global collectSameElements*/
'use strict';

describe('practice-1-4', () => {

  const collectionA = [
    {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  ];
  const collectionB = {value: ['a', 'd', 'e', 'f']};

  it('Get the same elements both in key properties of Collection A and value property of Collection B', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
function collectSameElements(collectionA, collectionB) {
  const collectionA_values = collectionA.map(a => a.key);
  console.log(collectionA_values);
  const collectionB_values = Object.values(collectionB);
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