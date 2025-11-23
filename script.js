function chunkArrayInGroups(array, size) {
  let result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i , i + size));
  }

  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
console.log(chunkArrayInGroups(["Hello", "World", "I", "Love", "JS"], 1));
console.log(chunkArrayInGroups(["Chunk", "This", "Array", "Into", "Groups"], 2));
