
var assertTrue = function(obj1, obj2) {
	ok(obj1, obj2);
};

Object.prototype.shouldEqual = function (that) {
	assertTrue(this, that);
};

String.prototype.startsWith = function (string) {
	return this.indexOf(string) === 0;
};

function camelCaseToSpaces(string)
{
	
}

function clone(object) {
	function F() {}
	F.prototype = object;
	return new F;
}

var ContextSpecification = {
	establishContext: function () {},
	
	because: function () {},
	
	executeTest: function (name, assertion) {
		this.establishContext();
		this.because();
		var localContext = this;
		test(name, function () localContext[assertion]());
	},
	
	executeTests: function () {
		for (property in this)
		{
			if (property.startsWith("itShould"))
				this.executeTest(property, property);
		}
	}
};

whenIAddTwoNumbers = clone(ContextSpecification);
whenIAddTwoNumbers.name = "When I Add Two Numbers";
whenIAddTwoNumbers.establishContext = function () {
	this.num1 = 1;
	this.num2 = 2;
};

whenIAddTwoNumbers.because = function () { this.result = this.num1 + this.num2; };
whenIAddTwoNumbers.itShouldCorrectlyAddNumbers = function () this.result.shouldEqual(this.num1 + this.num2);



//when("I Add two numbers")
//	.itShould("sum them").means(function () this.result.shouldEqual(this.num1 + this.num2))
//	.itShould("not subtract them").means(function () this.result.shouldNotBeSubtracted());