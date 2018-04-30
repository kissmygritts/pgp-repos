const { helpers } = require('../src/pgp')
const { select } = require('../src/select')

describe('select function', () => {
  const table = 'user'
  const fields = ['first_name', 'last_name', 'position']
  const cs = helpers.ColumnSet(fields, helpers.TableName(table))
  const repo = { pgp: 'pgp', db: 'db', cs }

  test('it should be a function', () => {
    expect(select).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(select(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL select statement', () => {
    expect(typeof select(repo)()).toBe('string')
  })

  test('when fully applied it should return a sql select statement 2', () => {
    expect(select(repo)()).toBe('select * from "user"')
  })
})
