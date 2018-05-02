const { helpers, format } = require('./pgp')

const select = repo => () => {
  return format('select * from $/table/', { table: repo.cs.table })
}

const find = repo => data => {
  return format('select * from $/table/ where id = $/id/', {
    table: repo.cs.table,
    id: data.id
  })
}

const insert = repo => data => {
  return helpers.insert(data, repo.cs)
}

const update = repo => data => {
  return helpers.update(data, repo.cs)
}

const partialUpdate = repo => data => {
  const { id, input } = data
  const update = helpers.update(input, Object.keys(input), repo.cs.table)
  return format(update + ' where id = $/id/ returning *', { id })
}

const sets = repo => data => {
  return helpers.sets(data, repo.cs)
}

const values = repo => data => {
  return helpers.values(data, repo.cs)
}

const destroy = repo => data => {
  return format('delete from $/table/ where id = $/id/ returning *', {
    table: repo.cs.table,
    id: data.id
  })
}

const findBatch = repo => data => {
  return format('select * from $/table:name/ where $/field:name/ in ($/vals:csv/)', data)
}

module.exports = {
  select,
  find,
  insert,
  update,
  partialUpdate,
  sets,
  values,
  destroy,
  findBatch
}
