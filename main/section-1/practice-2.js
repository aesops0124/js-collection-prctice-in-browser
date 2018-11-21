'use strict';

function collectSameElements(collectionA, collectionB) {
   return collectionA.filter(element => [].concat.apply([], collectionB).includes(element))
}