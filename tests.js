// Methods to test.
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };

// **********
// **********
// **********

when("adding two numbers");

context = function() {
	this.num1 = 1;
	this.num2 = 2;
};

because = function () { 
	this.result = add(this.num1, this.num2); 
};

should("add the numbers", function () this.result.shouldEqual(this.num1 + this.num2));
should("not subtract the numbers", function () this.result.shouldNotEqual(this.num1 - this.num2));

// **********
// **********
// **********

when("subtracting two numbers");

context = function() {
	this.num1 = 1;
	this.num2 = 2;
};

because = function () {
	this.result = subtract(this.num1, this.num2);;
};

should("subtract the numbers", function () this.result.shouldEqual(this.num1 - this.num2));
should("not add the numbers", function () this.result.shouldNotEqual(this.num1 + this.num2));