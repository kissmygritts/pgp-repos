const { helpers } = require('./pgp')

const withColumnSet = ({ fields, table }) => repo => ({
  ...repo,
  cs: helpers.ColumnSet(fields, helpers.TableName(table))
})

module.exports = {
  withColumnSet
}
