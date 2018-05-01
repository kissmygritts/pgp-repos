const { helpers } = require('./pgp')

const update = repo => data => {
  return helpers.update(data, repo.cs)
}

module.exports = { update }
