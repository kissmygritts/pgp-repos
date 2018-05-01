const { format, helpers } = require('./pgp')

const partialUpdate = repo => data => {
  const { id, input } = data
  const update = helpers.update(input, Object.keys(input), repo.cs.table)
  return format(update + ' where id = $/id/ returning *', { id })
}

module.exports = { partialUpdate }
