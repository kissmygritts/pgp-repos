const { format } = require('./pgp')

const select = repo => () => {
  return format('select * from $/table/', { table: repo.cs.table })
}

module.exports = {
  select
}
