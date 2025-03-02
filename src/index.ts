// import { BankAccount } from "./BankAccount";
// import { SavingAccount } from "./SavingAccount";
// const account1 = new BankAccount (123456,10000,"Nabthong Supipak")
// const saving1 = new SavingAccount (123456,15000,"Nabthong Supipak",0.09)

// console.log (saving1.getOwner())
// console.log (saving1.getBalace())
// saving1.interest()
// console.log (saving1.getOwner())
// console.log (saving1.getBalace())
// saving1.withdraw(12000)
// console.log(account1)
// console.log(saving1)
 

// import { DiscountedProduct } from "./DiscountedProduct";
// import { Product } from "./Product";
// const product = new Product(1234,"Soup",2687,3)

// const discount = new DiscountedProduct (1234,"Soup",2687,3,50)

// console.log("ราคาปกติ: ", product.getPrice()*product.getQuantity())
// console.log("ส่วนลด: ", discount.totalDiscount())
// console.log ("ราคาหลังหักส่วนลด: " ,discount.getDiscountPrice())
// console.log(product)
// console.log (discount)


// import { Car } from "./Car";

// const myCar = new Car("TOYOTA",20)
// myCar.accelerate(30) // ความเร็วปัจจุบัน 50
// myCar.brake(10)

// console.log(myCar)

import { UserAccount } from "./UserAccount";
import { AdminAccount } from "./AdminAccount";
const user = new UserAccount("nabnoey", "123456", "nabnoy@gmail.com");
const admin = new AdminAccount("admin","1234","admin@gmail.com")
const changePas = user.changePassword("123456","112233")
console.log("เปลี่ยนรหัสผ่าน: ", changePas);

console.log(user)
console.log(admin)