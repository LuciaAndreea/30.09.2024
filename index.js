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

//JAVASCRIPT DATE

const now = new Date();
console.log(now);

const yesterday = new Date("2024-09-30");
console.log(yesterday);

//Date methods
//accesarea proprietatilor unui obiect Data

console.log("not.getDate()",now.getDate()); //returneaza ziua de pe obiectul date
console.log("now.getDay()",now.getDay());  //returneaza ziua din saptamana
console.log("now.getFullYear()",now.getFullYear());
console.log("now.getMonth()",now.getMonth()); //returneaza indexul corespunzator lunii intr-un array de 12 obiecte

//setarea proprietatilor unui obiect Date
yesterday.setFullYear(2021);
console.log("yesterday: ",yesterday);
yesterday.setMonth(7);
console.log(yesterday);
yesterday.setDate(29);
console.log(yesterday);

//adaugarea de zile intr-un obiect date

yesterday.setDate(yesterday.getDate()+2);
console.log(yesterday);

const difference = now - yesterday;
console.log("difference: ",difference);

//formatarea unei date

const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const weekDay = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

const months = ["January" , "February" , "March" , "April" , "May" 
    , "June" , "July" , "August" , "September", "October","November" , "December"];
const weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ];

const formattedDate = `Year ${year} , month ${months[month]} , day ${day} , ${weekDays[weekDay]} , time: ${hour}:${minutes}`;
console.log(formattedDate);

const newDate = new Date();
const timeStamp = newDate.getTime();
console.log(timeStamp);
const fromTimeStamp = new Date(timeStamp - 500000);
console.log(fromTimeStamp);