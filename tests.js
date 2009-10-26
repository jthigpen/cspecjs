Object.prototype.shouldEqual = function (that) {
	equals(this, that);
};

Object.prototype.shouldNotEqual = function (that) {
	ok(this != that);
};

var _contextName;

function when(contextName) { 
	delete because;
	delete context;
	_contextName = contextName;
}

function should(specName, assertion) {
	var contextName = _contextName;
	var localContext = context;
	var localBecause = because;
	var localAssertion = assertion;
	var currentContext = {};
	
	test("When " + contextName + " it should " + specName, function () {
		localContext.call(currentContext);
		localBecause.call(currentContext);
		localAssertion.call(currentContext);
	});
}