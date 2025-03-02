"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    getBrand() {
        return this.brand;
    }
    getSpeed() {
        return this.speed;
    }
    //เร่ง
    accelerate(amount) {
        if (amount > 0) {
            this.speed += amount;
            console.log(` เร่งความเร็ว ${amount} km/hr ความเร็วปัจจุบัน ${this.speed} km/hr`);
        }
        else {
            console.log("ไม่มีการเร่งค่าความเร็ว");
        }
    }
    brake(amount) {
        if (amount > 0 && amount <= this.speed) {
            this.speed -= amount;
            console.log(` ลดความเร็ว:${amount} km/hr ความเร็วปัจจุบัน: ${this.speed} km/hr `);
        }
        else {
            console.log("ไม่มีการเบรก");
        }
    }
}
exports.Car = Car;
