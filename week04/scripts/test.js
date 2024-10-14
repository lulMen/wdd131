let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const result = names.filter((namesB) => namesB[0].toLowerCase() == 'b');

console.log(result);

const namesLength = names.map(name => name.length);

console.log(namesLength);

const avgStrLength = names.reduce(
    (total, name) => total + name.length, 0) / names.length;

console.log(avgStrLength);