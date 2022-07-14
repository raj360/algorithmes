let arr = [1, 2, 3, 4, 5, 6, 7];

const length = arr.length;

let index = 4;

const infiniteRoutingCorousel = (array) => {
  array.index = 0;

  array.current = function () {
    this.index = this.index % array.length;
    return array[this.index];
  };

  array.next = function () {
    this.index++;
    return this.current();
  };

  array.previous = function () {
    this.index += array.length - 1;
    return this.current();
  };

  array.reset = function () {
    this.index = 0;
    return this.current();
  };
};

infiniteRoutingCorousel(arr);
console.log(arr.current());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.reset());
console.log(arr.previous());
console.log(arr.previous());
console.log(arr.previous());
