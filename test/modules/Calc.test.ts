/// <reference path="../../typings/main.d.ts" />
import Calc from '../../src/modules/Calc'
import chai = require('chai')
let expect = chai.expect
chai.should()

describe('Calc', () => {
  it('should works', () => {
    let calc = new Calc
    calc.add(1, 2).should.equal(3)
  })
})
