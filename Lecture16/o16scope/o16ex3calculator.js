
const calculator = {
    a: 0,
    b: 0,
    read: function () {
        this.a = prompt("write a, yo");
        this.b = prompt("write b, yo");
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
};


calculator.read();
alert(calculator.sum());
alert(calculator.mul());
