const { withDbContext } = require('./withDbContext')

describe('functional suite', () => {
  let dbCtx = withDbContext({
    db: 'url'
  })
  test('should return a function', () => {
    expect(dbCtx).toBeInstanceOf(Function)
  })
  test('should return an object', () => {
    expect(dbCtx({})).toBeInstanceOf(Object)
  })
  test('should have db', () => {
    expect(dbCtx({})).toHaveProperty('db')
  })
})
