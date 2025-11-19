export function shuffleDown(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(i, j);
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  return arr;
}

export function shuffleUp(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * arr.length);
    swap(i, j);
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  return arr;
}
