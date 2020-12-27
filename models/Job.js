const Job = connection.define('Job', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}
)
module.exports = Job