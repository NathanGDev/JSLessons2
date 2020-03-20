
class Car{
    #vin;
    // ^^^^^ FOR PRIVACY

    constructor(make, model, year, miles, color, vin){
         this.make = make;
         this.model = model;
         this.year = year;
         this.miles = miles;
         this.color = color;
         this.#vin = vin;
    }
    
    get vin(){
        return this.#vin;
    }
    // console.log(myCar.#vin);
    // 'get' JUST READS
    
    set vin (value) {
        this.#vin = value;
    }
    // myCar.vin = 123
    //  'set' ASSIGNS
}



let myCar = new Car('Chevrolet', 'Cruze', 2015, 69000, 'black', 34276814326187);

console.log(myCar.#vin);
myCar.vin = 123
