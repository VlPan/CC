// TODO: Examples

// TODO: Weak may keys only objects

// Map – коллекция для хранения записей вида ключ:значение.
// key in map is any type

var map = new Map([
    [NaN, 'n1'],
    [NaN, 'n2']
  ]);

map.get(NaN);
// Map(1) {NaN => "n2"}

for(num of map) {
    console.log(num);
}

for(num in map) {
    console.log(num);
}

map.a = 12; 
// can i do that?
// - yes
// you can prevent by calling Object.seal(map);

// Iterated object is an argument of the map

// map.delete(key)
// map.clear()
// map.get, map.set

// map.keys() – возвращает итерируемый объект для ключей,
// map.values() – возвращает итерируемый объект для значений,
// map.entries() – возвращает итерируемый объект для записей [ключ, значение], он используется по умолчанию в for..of.

// То есть, если некий объект присутствует только в WeakSet/WeakMap – он удаляется из памяти.
