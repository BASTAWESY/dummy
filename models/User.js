function User(connection) {
    const User = connection.define('User', {
        uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    }
    )
}
module.exports = User