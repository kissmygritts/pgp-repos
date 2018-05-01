const { format } = require('./pgp')

const find = repo => data => {
  return format('select * from $/table/ where id = $/id/', {
    table: repo.cs.table,
    id: data.id
  })
}

module.exports = {
  find
}
