const { helpers } = require('./pgp')

const insert = repo => data => {
  return helpers.insert(data, repo.cs)
}

module.exports = {
  insert
}
