const { helpers } = require('./pgp')

const values = repo => data => {
  return helpers.values(data, repo.cs)
}

module.exports = { values }
