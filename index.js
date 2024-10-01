console.log("Hello");
//JS- arrat , example fruits
const fruits = ["apple" , "pear", "banana" , "pineapple"];
console.log(fruits);
console.log("second item:  ",fruits[1]);

const lastItem = fruits[fruits.length-1];
console.log("last item: ",lastItem);

//modificarea unui element in array

fruits[1] = "orange";
console.log("second item updated: ",fruits[1]);

//adaugarea de elemente in array

const newFruit = "mango";
fruits.push(newFruit);// adaugarea elementului la finalul array-ului
console.log(fruits);

fruits.unshift("peach"); //adaugarea elementului la inceputul array-ului
console.log(fruits)

//stergerea unui element din array

fruits.pop(); //sterge ultimul element din array
console.log(fruits);

fruits.shift(); //stergerea primului element din array
console.log(fruits);

//aflarea indexului unui element din array

const  indexOfApple = fruits.indexOf("apple");
console.log(indexOfApple);

//extragerea unui subset din array -- IL FELIEM
const fruitSubSet = fruits.slice(1,3);
console.log(fruitSubSet);

//modificarea unui array
fruits.splice(1, 2);
console.log(fruits);

fruits.splice(1 , 0 , "blueberry" , "strawberry");
console.log(fruits); 

const allFruits = fruits.concat(fruitSubSet);
console.log(allFruits);

//JAVASCRIPT OBJECTS

const person = {
    name : "Lucia",
    surname : "Ursu",
    age: 23,
    address:{
        street: "Florilor",
        number: 123,
    },
    contact:{
        phone:"011000000",
        email:"luciaursu@.com",
    },
    hobbies:["hiking" , "gardening" , "fishing"]
};

console.log("person's name: ",person.name);
console.log("person's phone: ",person.contact.phone);
console.log("person's surname: ",person["surname"]);

//modificarea unui atribut al unui obiect


person.age = 12;
console.log("person's age: ",person.age);
console.log("person: ",person);


//compararea de obiecte

const obj1 = {a : 1};
const obj2 = {a : 1};
console.log("obj1 === obj2", obj1 === obj2);

const obj3 = {a:1};
const obj4 = obj3;
console.log("obj3 === obj4", obj3 ===obj4);