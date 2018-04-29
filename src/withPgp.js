const withPgp = ({ pgp }) => repo => ({ ...repo, pgp })

module.exports = {
  withPgp
}
