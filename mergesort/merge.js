export function merge( arrayA, arrayB ) {
    const arrayC = [];

    let indexA = 0;
    let indexB = 0;
    let indexC = 0;

    while(indexA < arrayA.length && indexB < arrayB.length) {
        if(arrayA[indexA] < arrayB[indexB]) {
            arrayC[indexC] = arrayA[indexA];
            indexA++;
        } else {
            arrayC[indexC] = arrayB[indexB];
            indexB++;
        }
        indexC++;
    }

    while(indexA < arrayA.length) {
        arrayC[indexC] = arrayA[indexA];
        indexA++
        indexC++
    }

    while(indexB < arrayB.length) {
        arrayC[indexC] = arrayB[indexB];
        indexB++
        indexC++
    }

    return arrayC;

}