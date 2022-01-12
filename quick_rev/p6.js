let person = {
    name: 'Priyansh',
    age: 19
};
console.log(person);

person.name = 'Varun';
console.log(person);

person['name'] = 'Tarun';
console.log(person);

console.log(person.age);

let selection = 'age';
person[selection] = 46;
console.log(person);
