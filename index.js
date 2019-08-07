function date() {
    var d = new Date();
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    return datestring;
}
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(name, owner, maxCount) {
        this.products = [];
        this.logs = '';
        this.name = name;
        this.owner = owner;
        this.maxCount = maxCount;
    }
    ShoppingCart.prototype.addNewProduct = function (product) {
        if (this.maxCount === this.products.length) {
            this.products.sort();
            this.products.splice(0, 1);
        }
        product.log = date();
        this.products.push(product);
        this.logs += "Add product - " + product + " " + date() + " \n";
        return this;
    };
    ShoppingCart.prototype.removeProduct = function (index) {
        if (index >= this.products.length) {
            console.log('There are no products, enter another index');
        }
        else {
            this.products.splice(index, 1);
        }
        this.logs += "Remove product with id - " + index + ", time " + date() + "\n";
        return this;
    };
    ShoppingCart.prototype.getAveragePrice = function () {
        var average = 0;
        var sum = 0;
        for (var index = 0; index < this.products.length; index++) {
            sum += this.products[index].price;
        }
        average = sum / this.products.length;
        return average;
    };
    ShoppingCart.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        var sum = 0;
        for (var index = 0; index < this.products.length; index++) {
            sum += this.products[index].price;
        }
        return sum;
    };
    ShoppingCart.prototype.getFormattedListOfProducts = function () {
        var a = '';
        var formatedlist = [];
        for (var i = 0; i < this.products.length; i++) {
            a = this.products[i].name + " - is on " + this.name + " from " + this.products[i].log + ". Detailed product description: " + this.products[i].decription;
            formatedlist.push(a);
        }
        return formatedlist;
    };
    ShoppingCart.prototype.getHistory = function () {
        return this.logs;
    };
    return ShoppingCart;
}());
var Product = /** @class */ (function () {
    function Product(name, decription, price) {
        this.name = name;
        this.decription = decription;
        this.price = price > 0 ? price : 0;
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (newPrice) {
        if ((this.price > newPrice) || (newPrice > Number.MAX_VALUE)) {
            console.log('You can not set smaller price and price which is not finite');
            return this;
        }
        else {
            this.price = newPrice;
            return this;
        }
    };
    return Product;
}());
var product1 = new Product('apple', 'green', 20);
var product2 = new Product('bananas', 'yellow', 30);
console.log(product1);
console.log('Product price is ' + product1.getPrice());
console.log(product1.setPrice(1.7976931348623157e+309));
console.log('New product price is ');
console.log(product1.setPrice(40).setPrice(500));
var shoppingCart1 = new ShoppingCart('Card1', 'Vitalik', 10);
shoppingCart1.addNewProduct(product1).addNewProduct(product2);
console.log('ShopingCart after add:');
console.log(shoppingCart1.getProducts());
console.log('Total price is ' + shoppingCart1.getTotalPrice());
console.log('Average price is ' + shoppingCart1.getAveragePrice());
shoppingCart1.removeProduct(1);
console.log(shoppingCart1.getHistory());
console.log(shoppingCart1.getFormattedListOfProducts());
// console.log('ShopingCart after delete:');
// console.log(shoppingCart1.getProducts());
// const d = new Date();
// let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
//     d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
// console.log(datestring);
