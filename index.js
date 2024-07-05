import http from 'http'
import ip from 'ip'
import express from 'express'
import axios from 'axios'
import reqIp from "request-ip"

const app = express()

const PORT = 8800

app.get('/api/hello', (req, res) => {
    const ipAddress = req.header("x-fowarded-for") ||req.socket.remoteAddress 
    var clientNIp = reqIp.getClientIp(req)
    const clientIp = ip.address();
    const visitorName = req.query.visitor_name || "Mark"
    const city = "New york"

    axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=87f4e7bac1784bbfb7dcbe549a7bc334&ip_address=${ipAddress}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    const resultBody = {
        "client_ip": clientNIp,
        "location": `${city}`,
        "greeting": `Hello, ${visitorName}!, the temperature is 11 degrees Celsius in ${city}`
    }

    res.status(200).json(resultBody);
});


app.listen(PORT, () => {
    console.log(`✅ Server listening on port: ${PORT}`)
}) 