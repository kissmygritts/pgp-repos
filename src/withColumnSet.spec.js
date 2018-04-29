const { helpers } = require('./pgp')
const ColumnSet = helpers.ColumnSet
const { withColumnSet } = require('./withColumnSet')

describe('withColumnSet functions', () => {
  const table = 'user'
  const fields = ['first_name', 'last_name', 'position']
  const repo = { pgp: 'pgp', db: 'db' }
  const partial = withColumnSet({ table, fields })

  test('it should be a function', () => {
    expect(withColumnSet).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(withColumnSet({})).toBeInstanceOf(Function)
  })

  test('when fully applied it should return an object', () => {
    expect(partial({})).toBeInstanceOf(Object)
  })

  test('when fully applied the return object should have cs property', () => {
    expect(partial({})).toHaveProperty('cs')
  })

  test("when fully applied the return object's cs property should be a pg-promise ColumnSet", () => {
    expect(partial({}).cs).toBeInstanceOf(ColumnSet)
  })

  test('when given a repo it should destructure repo for the return object', () => {
    expect(partial(repo)).toMatchObject(repo)
  })
})
