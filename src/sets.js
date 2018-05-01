const { helpers } = require('./pgp')

const sets = repo => data => {
  return helpers.sets(data, repo.cs)
}

module.exports = { sets }
