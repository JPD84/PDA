var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should add', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should multiply',function(){
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.equal(calculator.runningTotal, 15)
  })

  it('should divide',function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('should concatenate',function(){
    calculator.numberClick (1)
    calculator.numberClick (1)
    calculator.numberClick (1)
    assert.equal(calculator.runningTotal, 111)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 18 )
  })
   it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.clearClick (0)
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6)
   })




});
