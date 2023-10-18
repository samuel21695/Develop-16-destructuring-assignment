const arrayA = [];
const arrayB = ["피카츄", "라이츄", "파이리"];

// 절차방식
for (let i=0; i < arrayB.length; i++) {
  arrayA[i] = arrayB[i];
}

// 선언방식
const arrayC = arrayA.map(data => data);