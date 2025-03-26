let car = {
  type: "", 
  model: "Corolla", 
  color: "Black"
}
console.log(typeof car); //expected output: object
car.type = "Toyota" ;
console.log(car.type); //expected output Toyota
car.wheels = 4;
console.log(car);//expected output type:Toyota model:Corolla color: Black wheels:4

