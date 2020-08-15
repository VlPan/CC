var arr = [NaN]
console.log(arr.indexOf(NaN)); // -1
console.log(arr.includes(NaN)); // true

var map = new WeakMap();

function namespace(object) {
  if(map.has(object)) {
    return map.get(object)
  } else {
    map.set(object, {})
    return map.get(object);
  }
}

function Coordinate(x, y) {
  namespace(this).x  = x;
  namespace(this).y  = y;
}

Coordinate.prototype.moveRight = function () {
  namespace(this).x ++;
}

Coordinate.prototype.logCoordinates = function() {
  console.log('X / Y', namespace(this).x, namespace(this).y);
}

let p1 = new Coordinate(1,1);
let p2 = new Coordinate(0,0);

p1.moveRight();
p2.moveRight();

p1.logCoordinates();
p2.logCoordinates();