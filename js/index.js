class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];
    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Максимальное кол-во квартир достигнута. Немозможно добавить еще одну квартиру.");
        }
    }
}

const person1 = new Person("Славик", "М");
const person2 = new Person("Маша", "Ж");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);