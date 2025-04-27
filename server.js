import express from 'express';
import mysql from 'mysql2/promise';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config({
    path: "./config.env"
});

const app = express();

//destructure our env values
const {PORT, DB_DATABASE, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

//connect to the db
try {
    const connection = await mysql.createConnection({
        host: DB_HOST, 
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
    });

    console.log(chalk.blue("Connected to the databse on localhost:3307"));

    app.get("/products", async (req, res) => {
        //perform a query and destructure results
        const [ products ] = await connection.query('SELECT productName, productDescription, price FROM products');


        res.status(200).json({
            massage: `Found ${products.length} records`,
            products: products
        })
    })
} catch (err) {
    console.log(chalk.red(`Something went wrong: ${err}`));
}



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));