const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía

function prepareGifts(gifts) {
  //[3, 1, 2, 3, 4, 2, 5]
  //paso 1: eliminar repetidos
  //[3, 1, 2, 4, 5]
  //paso 2: ordenarlos
  //[1,2,3,4,5]
  const newArray = [];
  for (let i = 0; i < gifts.length; i++) {
    if (!newArray.includes(gifts[i])) {
      newArray.push(gifts[i]);
    }
  }
  newArray.sort((a, b) => a - b);
  return newArray;
}
