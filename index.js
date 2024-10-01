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