"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
const Product_1 = require("./Product");
class DiscountedProduct extends Product_1.Product {
    constructor(id, name, price, quantity, discount) {
        super(id, name, price, quantity);
        this.discount = discount;
    }
    totalDiscount() {
        return (this.getPrice() * this.getQuantity() * this.discount) / 100;
    }
    getDiscountPrice() {
        return (this.getPrice() * this.getQuantity()) - this.totalDiscount();
    }
}
exports.DiscountedProduct = DiscountedProduct;
