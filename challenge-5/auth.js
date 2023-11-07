import express from "express";
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const app = express.Router();

const secretKey = 'maul_key';



