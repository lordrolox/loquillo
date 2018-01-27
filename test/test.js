const expect = require('chai').expect
const loquillo = require('..').default

describe('#loquillo', function() {
  it('program', function() {
    let translation = loquillo('Programar')
    expect(translation).to.equal('Program')
  })
  it('zorrope', function() {
    let translation = loquillo('Zorro')
    expect(translation).to.equal('Zorrope')
  })
  it('ffwewqf', function() {
    let translation = loquillo('Zarpar')
    expect(translation).to.equal('Zarppe')
  })
  it('few4343qf', function() {
    let translation = loquillo('abecedario')
    expect(translation).to.equal('abece-dario')
  })
  it('few43qf', function() {
    let translation = loquillo('sometemos')
    expect(translation).to.equal('sOmEtEmOs')
  })
})
