/* tslint:disable:no-unused-variable */
import { expect, should } from '../helper'
import Calc from '../../src/modules/Calc'

describe('Calc', () => {
  let calc

  beforeEach(() => {
    calc = new Calc
  })

  it('should add', () => {
    calc.add(1, 2).should.equal(3)
  })

  it('should sub', () => {
    expect(calc.sub(1, 2)).to.equal(-1)
  })
})
