/*1(a).class
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
}
const obj=new Movie("leo","7-screen","8.5")
console.log(obj.title,obj.studio,obj.rating)

//(b)
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
}
const obj=new Movie("leo","7-screen")
console.log(obj.title,obj.studio,obj.rating)

//(c)
class Movie {
    constructor(title, rating) {
        this.title = title;
        this.rating = rating;
    }
}
class MovieManager {
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const movies = [
    new Movie("Veeram", "PG"),
    new Movie("Sarkar", "PG-13"),
    new Movie("Leo", "PG"),
    new Movie("Billa", "R")
];

const pgMovies = MovieManager.getPG(movies);
console.log(pgMovies);


//(d)
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
}
const obj=new Movie("CasinoRoyale","Eon Productions","PG­13")
console.log(obj.title,obj.studio,obj.rating)

class Car{
    constructor(brand,color,model,type,price,section){
        this.brand=brand;
        this.color=color;
        this.model=model;
        this.type=type;
        this.price=price;
        this.section=section;
        }
}
const vehicle=new Car("verna","white","car","sedan","1300000","compactsedan")
console.log(vehicle.brand,vehicle.color,vehicle.model,vehicle.type,vehicle.price,vehicle.section)

//---------------------------------------------------------------------------------------------------

//2.circle task
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj = new Circle(1.0,"red") 
console.log(obj.Color);
console.log(obj.Radius);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.circumference);
obj.Radius=3.5
console.log(obj.Radius);
obj.Color="green"
console.log(obj.Color);

//-------------------------------------------------------------------------------------

//3.Person class
class Person{
    constructor(Name,age,gender,maritalstatus,contact,email="NULL"){
    this.name=Name;
    this.age=age;
    this.gender=gender;
    this.maritalstatus=maritalstatus;
    this.contact=contact;
    this.email=email;
}
}
const obj=new Person("Nivetha","23","Female","Married","9874563210","nivetha@gmail.com")
// console.log(obj.name,obj.age,obj.gender,obj.maritalstatus,obj.contact,obj.email)
const obj2=new Person("Aishwarya","23","Female","Married","aishwarya@gmail.com")
console.log(obj2.name,obj2.age,obj2.gender,obj2.maritalstatus,obj2.contact,obj2.email)

//------------------------------------------------------------------------------------------

//4.Calculate the Uber price
class UberPrice {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distance, time) {
        const fare = this.baseFare + (this.costPerMinute * time) + (this.costPerMile * distance);
        return fare;
    }
}
const calculator = new UberPrice(5, 0.2, 1.5);
const distance = 20;
const time = 15;
const price = calculator.calculatePrice(distance, time);
console.log("Uber price:", price);
*/


