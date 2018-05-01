const { helpers } = require('../src/pgp')
const { select } = require('../src/select')
const { find } = require('../src/find')
const { findBatch } = require('../src/findBatch')
const { insert } = require('../src/insert')
const { update } = require('../src/update')
const { values } = require('../src/values')
const { sets } = require('../src/sets')
const { destroy } = require('../src/destroy')
const { partialUpdate } = require('../src/partialUpdate')

const table = 'user'
const fields = ['id', 'first_name', 'last_name', 'position']
const cs = helpers.ColumnSet(fields, helpers.TableName(table))
const repo = { pgp: 'pgp', db: 'db', cs }
const data = {
  id: 1,
  first_name: 'bruce',
  last_name: 'banner',
  position: 'hulk'
}
const batch = {
  table,
  field: 'id',
  vals: [1, 2, 3]
}

describe('select', () => {
  test('it should be a function', () => {
    expect(select).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(select(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a sql statement', () => {
    expect(select(repo)()).toBe('select * from "user"')
  })
})

describe('find', () => {
  test('it should be a function', () => {
    expect(find).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(find(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a sql statement', () => {
    expect(find(repo)(data)).toBe(`select * from "user" where id = 1`)
  })
})

describe('findBatch', () => {
  test('it should be a function', () => {
    expect(findBatch).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(findBatch(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a sql statement', () => {
    expect(findBatch(repo)(batch)).toBe(`select * from "user" where "id" in (1,2,3)`)
  })
})

describe('insert', () => {
  test('it should be a function', () => {
    expect(insert).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(insert(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(insert(repo)(data)).toBe(
      `insert into "user"("id","first_name","last_name","position") values(1,'bruce','banner','hulk')`
    )
  })
})

describe('update', () => {
  test('it should be a function', () => {
    expect(update).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(update(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(update(repo)(data)).toBe(
      `update "user" set "id"=1,"first_name"='bruce',"last_name"='banner',"position"='hulk'`
    )
  })
})

describe('values', () => {
  test('it should be a function', () => {
    expect(values).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(values(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(values(repo)(data)).toBe(`(1,'bruce','banner','hulk')`)
  })
})

describe('sets', () => {
  test('it should be a function', () => {
    expect(sets).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(sets(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(sets(repo)(data)).toBe(
      `"id"=1,"first_name"='bruce',"last_name"='banner',"position"='hulk'`
    )
  })
})

describe('destroy', () => {
  test('it should be a function', () => {
    expect(destroy).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(destroy(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(destroy(repo)(data)).toBe(`delete from "user" where id = 1 returning *`)
  })
})

describe('partialUpdate', () => {
  let id = 1
  let input = { first_name: 'bruce', last_name: 'banner', position: 'hulk' }

  test('it should be a function', () => {
    expect(partialUpdate).toBeInstanceOf(Function)
  })

  test('it should return a function', () => {
    expect(partialUpdate(repo)).toBeInstanceOf(Function)
  })

  test('when fully applied it should return a SQL statement', () => {
    expect(partialUpdate(repo)({ id, input })).toBe(
      `update "user" set "first_name"='bruce',"last_name"='banner',"position"='hulk' where id = 1 returning *`
    )
  })
})
