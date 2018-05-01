const { format } = require('./pgp')

const findBatch = repo => data => {
  return format('select * from $/table:name/ where $/field:name/ in ($/vals:csv/)', data)
}

module.exports = {
  findBatch
}
