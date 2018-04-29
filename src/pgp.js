const pgp = require('pg-promise')()

module.exports = {
  format: pgp.as.format,
  helpers: pgp.helpers
}
