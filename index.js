import http from 'http'
import ip from 'ip'
import express from 'express'

const app = express()

const PORT = 8800

app.get('/api/hello', (req, res) => {
    // const ipAddress = req.ip;
    const clientIp = ip.address();
    const visitorName = req.query.visitor_name || "Mark"
    const city = "New york"


    const resultBody = {
        "client_ip": clientIp,
        "location": `${city}`,
        "greeting": `Hello, ${visitorName}!, the temperature is 11 degrees Celsius in ${city}`
    }

    res.status(200).json(resultBody);
});


app.listen(PORT, () => {
    console.log(`✅ Server listening on port: ${PORT}`)
}) 