const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file  = fs.readFileSync('./docs/openapi.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

const app = express();
const port = 3000;
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send("Welcome to the playground");
})

app.listen(port, () => {
    console.log("Server rdy & listening at http://localhost:" + port)
})