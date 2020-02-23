function sumofArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arra = [2, 1, 2];
console.log(sumofArr(arra));
