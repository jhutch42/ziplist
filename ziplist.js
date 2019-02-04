function ziplist(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  return newArray;
}

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}


const array1 = [1, 2, 3, 4];
const array2 = ['a', 'b', 'c', 'd'];

console.log(ziplist(array1, array2));
console.log(zipListTheSimpleWay(array1, array2));
