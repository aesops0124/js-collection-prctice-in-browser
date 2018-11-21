'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionA_values = collectionA.map(a => a.key);
  const collectionB_values = collectionB.value;
  return collectionA_values.filter(element => collectionB_values.includes(element))
}