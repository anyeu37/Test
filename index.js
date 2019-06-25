var Dog = require('./Dog');
var Cat = require( './Cat');
var Mouse = require('./Mouse');

var dog = new Dog('tom');
var mouse = new Mouse('mickey');
var tom = new Cat();
try {
	tom.eat(dog);

} catch(e) {
	console.log(e);
}
console.log(tom);
dog.sayHi();