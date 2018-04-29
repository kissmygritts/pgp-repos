const withDbContext = ({ db }) => repo => ({ ...repo, db })

module.exports = {
  withDbContext
}
