export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const element of array) {
    const value = element;
    newArray.push(appendString + value);
  }

  return newArray;
}
