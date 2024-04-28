function hello(name) {
    // return `My name is ${name}, Nice to meet you!`;
    console.log(`My name is ${name}, Nice to meet you!`);
}

function sayHello() {
    // return "Hi, it's good to see you!";
    console.log(`Hi, it's good to see you!`);
}

module.exports = {
    hello: hello,
    sayHello: sayHello
};

// exports.hello = hello;
// exports.sayHello = sayHello;
