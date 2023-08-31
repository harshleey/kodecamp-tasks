// * With mapSeries 

// import { mapSeries } from 'async';

// function asyncList(data, callback) {
//   setTimeout(() => {
//     const result = data * 2;
//     console.log(result);
//     callback(null, result);
//   }, 1000);
// }

const numbers = [1, 3, 5, 6, 3];

// mapSeries(numbers, asyncList, (error, results) => {
//   if (error) {
//     console.error('Error:', error);
//   } else {
//    console.log(`Here are all the data as an array:`, results)
//   }
// });


// * Without mapSeries
function nonMapList(data, callback) {
 setTimeout(() => {
  const solution = data * 2
  console.log(solution)
  callback(null, solution)
 }, 1000)

}


function processingCallback(array, index) {
 if (index < array.length) {
  nonMapList(array[index], (error, result) => {
   if (error) {
     console.error(error);
   } else {
    processingCallback(array, index + 1)
   }
  })
 }
}

processingCallback(numbers, 0)