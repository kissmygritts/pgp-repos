const { format } = require('./pgp')

const destroy = repo => data => {
  return format('delete from $/table/ where id = $/id/ returning *', {
    table: repo.cs.table,
    id: data.id
  })
}

module.exports = { destroy }
