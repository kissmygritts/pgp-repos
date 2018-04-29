const { withPgp } = require('./withPgp')

describe('withPgp function', () => {
  let repo = {}
  let pgp = withPgp({ pgp: 'pgp' })

  test('withPgp should be a function', () => {
    expect(withPgp).toBeInstanceOf(Function)
  })

  test('withPgp should return a function', () => {
    expect(pgp).toBeInstanceOf(Function)
  })

  test('when fully applied should return an object', () => {
    expect(pgp(repo)).toBeInstanceOf(Object)
  })

  test('when fully applied should return have pgp property', () => {
    expect(pgp(repo)).toHaveProperty('pgp')
  })
})
