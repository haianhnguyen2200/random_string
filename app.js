function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
} 

var btnCreate = document.querySelector('.btn-create')
var btnSort = document.querySelector('.arrange-sort')
var btnBubble = document.querySelector('.arrange-bubble')
var btnQuick = document.querySelector('.arrange-quick')
var app = document.querySelector('.app-body')


var listNum = [];
for (var j = 1; j <= 10; j++) {
   var index = Math.ceil(Math.random() * 5)
   var itemNum = {
      key: j,
      value: makeid(index)
   }
   listNum.push(itemNum)
}


// Create list
btnCreate.onclick = function () {
   var html = listNum.map(function(num) {
      return `
         <li class="num-item">${num.key}: ${num.value}</li>
      `;     
   })
   app.innerHTML = html.join('')  
}

// --- METHOD 1: Use JS to arrange list ---
btnSort.onclick = function () {
   var listNumArrange = listNum.sort(function (a, b) {
      if (a.value.toLowerCase() < b.value.toLowerCase()) {
         return -1
      }
      if (a.value.toLowerCase() > b.value.toLowerCase()) {
         return 1
      }
      return 0;
   })

   var html = listNumArrange.map(function(num) {
      return `
         <li class="num-item">${num.key}: ${num.value}</li>
      `;     
   })
   app.innerHTML = html.join('')  
}

// --- METHOD 2: Bubble Sort ---
function bubbleSort(array) {
   var size = array.length;

   for (var i = 0; i < size - 1; i++) {
      for (var j = 0; j < size - i - 1; j++) {
         if (array[j].toUpperCase() > array[j + 1].toUpperCase()) {
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
         }
      }
   }
}

btnBubble.onclick = function () {
   var valueList = [];
      listNum.forEach(function (num) {
         return result = valueList.push(num.value)
      })
   bubbleSort(valueList)

   var html = valueList.map(function(num, index) {
         return `
            <li class="num-item">${index + 1}: ${num}</li>
         `;     
      })
   app.innerHTML = html.join('')  
}

// --- METHOD 3: Quick Sort ---
// function quickSort (array) {
//    var size = array.length;

//    var less = []
//    var greater = []
//    var pivot = array.splice(Math.floor(size / 2), 1);

//    Array.prototype.quickSort = function () {
//       for (var i = size - 1; i >= 0; i--) {
//          if (array[i] <= pivot) {
//             less.push(array[i]);
//          } else {
//             greater.push(array[i]);
//          }
//       }
//    }
//    var c = [];
//    return c.concat(less.quickSort(), pivot, greater.quickSort());
// }

// btnQuick.onclick = function () {
//    var valueList = [];
//       listNum.forEach(function (num) {
//          return result = valueList.push(num.value)
//       })

//    quickSort(valueList)

//    var html = valueList.map(function(num, index) {
//          return `
//             <li class="num-item">${index + 1}: ${num}</li>
//          `;     
//       })
//    app.innerHTML = html.join('')  
// }




