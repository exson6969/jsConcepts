let car = {
    make:'BMW',
    model:'745li',
    year:'2013',
    getPrice: function(){
        return 50000;
    },
    printDescription: function(){
        console.log(this.make+ ' '+ this.model)
    }
}

car.printDescription();
console.log(car.year);