var events = require('events');
var cart;
var eventEmitter = new events.EventEmitter();

var createHandler = function created() {
    console.log("* Initziaintg shopping cart *");
    cart = new ShoppingCart();
}

var updateHandler = function updated(cart) {
    console.log(cart.info);
    console.log("* shopping cart is now updated *");
}

var destroyHandler = function destroyed(cart) {
    console.log(cart.total);
    console.log("* shopping cart is now destroyed *");
}

class ShoppingCart {
    constructor() {
        this.items = [{
            name:"",
            price:.0,
            amount:0
        }];
    }

    add(name, price, amount) {
        this.items.push({ name, price, amount });
        eventEmitter.emit('onUpdate', this);
    }

    get total() {
        const sum = this.items.reduce(function (result, item) {
            return result + item.price * item.amount;
        },0)
        return  `Total: ${sum}`;
    }

    get info() {
        return this.items.map(item => `Name: ${item.name}, Price: ${item.price}, Amount: ${item.amount}`).join('\n');
    }
}

eventEmitter.on("onCreate", createHandler);
eventEmitter.on("onUpdate", updateHandler);
eventEmitter.on("onDestroy", destroyHandler);

eventEmitter.emit('onCreate'); 
cart.add("Junk food",12,99);
eventEmitter.emit('onDestroy', cart);