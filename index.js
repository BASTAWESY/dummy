import express from 'express'
// const express = require('express')
import Sequelize from 'sequelize'
// const Sequelize = require('sequelize')
// const data = require('./models/data')
import dataFile from './models/dataFile.js'
const connection = new Sequelize('db', 'root0', 'root0', {
    dialect: "mysql"
})
// import User from './models/User'
// import Job from './models/Job'
const app = express()

const User = connection.define('User', {
    // uuid: {
    //     type: Sequelize.UUID,
    //     primaryKey: true,
    //     defaultValue: Sequelize.UUIDV4
    // },
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone: Sequelize.FLOAT
}
)
const Job = connection.define('Job', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
}
)

async function displayUsers() {
    const id = 2
    try {
        const {dataValues}= await User.findByPk(1)
        console.log(dataValues)
    }
    catch (err) {
        console.log(err.message)
    }
}
//CREATE TABLES
connection.sync({
    logging: console.log,
    force: true
})
    .then(() => {
        console.log('DB CONNECTED LOCALY !!!')
        User.bulkCreate(dataFile)
        displayUsers()
        app.listen(8080, () => {
            console.log('RUNNING WEB SERVER ON 8080')
        })
    })
    .catch(() => { console.log('BD ACCESS FAILD !!!') })

//RELATIONS
User.hasOne(Job)


// console.log(Boolean(flag))
// console.log(Boolean(false))

app.get('/', (req, res) => {
    return res.send({ name: 'basta', age: 50 })
})
