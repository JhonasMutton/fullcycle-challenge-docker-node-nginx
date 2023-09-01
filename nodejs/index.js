const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

function init() {
    console.log('Initializing migrations:')
    connection.query(`DROP TABLE people`)
    connection.query(`CREATE TABLE people (id INT NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, PRIMARY KEY (id))`)
}

init()

app.get('/', (req, res) => {
    connection.query(`INSERT INTO people(name) values ('Jhonas')`)

    connection.query('SELECT name FROM people', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Erro ao buscar nomes das pessoas' });
        } else {
            const names = results.map(result => result.name);
            res.send(`<h1>Full Cycle Rocks!</h1> <br> ${names}`)
        }
    });

})

app.listen(port, () => {
    console.log('App running and listening to port:', port)
})