const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')
const file = fs.readFileSync('./docs/openapi.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
const toXML = require('jstoxml')
var cors = require('cors')

const app = express();
const port = 3000;

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.get('/api/example', (req, res) => {
    res.send("Hiciste un get desde la direccion " + req.socket.remoteAddress)
})

app.get("/api/example/json", (req, res) => {
    let response = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body
    }
    res.json(response)
})

app.post("/api/example/json", (req, res) => {
    let response = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body
    }
    res.json(response)
})

app.delete("/api/example/json", (req, res) => {
    let response = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body
    }
    res.json(response)
}
)

app.put("/api/example/json", (req, res) => {
    let response = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body
    }
    res.json(response)
})

app.get("/api/example/undefined", (req, res) => {
    console.log("Pobre " + req.socket.remoteAddress)
})

app.get("/api/example/xml", (req, res) => {
    res.type('application/xml');
    let response = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        body: req.body
    }
    let xmlValue = '<?xml version="1.0" encoding="UTF-8"?><response>';
    xmlValue += toXML.toXML(response) + '</response>';
    console.log(xmlValue)
    res.send(xmlValue)
})

app.post("/api/example/xml", (req, res) => {
    res.type("application/json");
    let response = {
        response: "u shall not pass"
    }
    let xmlValue = '<?xml version="1.0" encoding="UTF-8"?><response>';
    xmlValue += toXML.toXML(response) + '</response>';
    res.status(401)
    res.send(response)
})

app.delete("/api/example/xml", (req, res) => {
    res.type("application/gif")
    res.status(418)
    res.sendFile("/opt/app/nggu2.gif")
})

app.get("/api/color", (req, res) => {
    res.type("application/json")
    res.status(200)
    res.json({"color": generateColor()})
})

app.listen(port, () => {
    console.log("Server rdy & listening at http://localhost:" + port)
})

function generateColor() {
    let result = ""
    let code = "0123456789abcdef";
    for(let i = 0; i<6;i++){
        result += code.charAt(Math.random()*code.length)
    }
    return result;
}