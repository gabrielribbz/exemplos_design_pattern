// Produto
class Car {
    constructor() {
        this.brand = null;
        this.model = null;
        this.year = null;
        this.isUsed = null;
        this.kilometers = null;
        this.fuelType = null;
        this.description = "Carro configurado"; // padrão genérico
    }

    showDetails() {
        console.log(`
    ${this.description}:
    Marca: ${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Usado: ${this.isUsed ? "Sim" : "Não"}
    Quilometragem: ${this.kilometers} km
    Tipo de Gasolina: ${this.fuelType}
    `);
    }
}

// Builder
class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setYear(year) {
        this.car.year = year;
        return this;
    }

    setIsUsed(isUsed) {
        this.car.isUsed = isUsed;
        return this;
    }

    setKilometers(kilometers) {
        this.car.kilometers = kilometers;
        return this;
    }

    setFuelType(fuelType) {
        this.car.fuelType = fuelType;
        return this;
    }

    setDescription(description) {
        this.car.description = description;
        return this;
    }

    build() {
        return this.car;
    }
}

// Director → Carros pré-definidos
class CarDirector {
    static buildEconomyCar() {
        return new CarBuilder()
            .setBrand("Chevrolet")
            .setModel("Celta")
            .setYear(2005)
            .setIsUsed(true)
            .setKilometers(150000)
            .setFuelType("Gasolina Comum")
            .setDescription("Carro Econômico")
            .build();
    }

    static buildSUVCar() {
        return new CarBuilder()
            .setBrand("Kia")
            .setModel("Sportage")
            .setYear(2024)
            .setIsUsed(false)
            .setKilometers(0)
            .setFuelType("Flex (Gasolina/Álcool)")
            .setDescription("SUV Familiar")
            .build();
    }

    static buildLuxuryCar() {
        return new CarBuilder()
            .setBrand("BMW")
            .setModel("X6")
            .setYear(2025)
            .setIsUsed(false)
            .setKilometers(0)
            .setFuelType("Gasolina Premium")
            .setDescription("Carro de Luxo")
            .build();
    }

    static buildElectricCar() {
        return new CarBuilder()
            .setBrand("BYD")
            .setModel("Han EV")
            .setYear(2025)
            .setIsUsed(false)
            .setKilometers(0)
            .setFuelType("Elétrico")
            .setDescription("Carro Elétrico")
            .build();
    }

    static buildSportsCar() {
        return new CarBuilder()
            .setBrand("McLaren")
            .setModel("720S")
            .setYear(2025)
            .setIsUsed(false)
            .setKilometers(0)
            .setFuelType("Gasolina Premium")
            .setDescription("Carro Esportivo")
            .build();
    }
}

// Uso
const economy = CarDirector.buildEconomyCar();
const suv = CarDirector.buildSUVCar();
const luxury = CarDirector.buildLuxuryCar();
const electric = CarDirector.buildElectricCar();
const sports = CarDirector.buildSportsCar();

const custom = new CarBuilder().setBrand("Ford").setModel("Mustang").setYear(2025).setIsUsed(false).setKilometers(0).setFuelType("Gasolina Premium").setDescription("Carro Personalizado").build();

economy.showDetails();
suv.showDetails();
luxury.showDetails();
electric.showDetails();
sports.showDetails();
custom.showDetails();