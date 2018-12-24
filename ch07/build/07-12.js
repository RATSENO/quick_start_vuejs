"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var s1 = new Set();
s1.add("사과");
s1.add("배");
s1.add("사과");
s1.add("포도");
console.log(s1);
//실행 결과 : Set { '사과', '배', '포도'}

var john = new Set(['사과', '배', '포도']);
var susan = new Set(['파인애플', '키위', '배']);

var union = new Set([].concat(_toConsumableArray(john.values()), _toConsumableArray(susan.values())));
console.log(union);
//합집합 : Set {'사과', '배', '포도', '파인애플', '키위'}

var intersection = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return susan.has(e);
}));
console.log(intersection);
//교집합 : Set {'배'}

var diff = new Set([].concat(_toConsumableArray(john.values())).filter(function (e) {
  return !susan.has(e);
}));
console.log(diff);
//교집합 : Set {'사과', '포도'}