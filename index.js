import http from 'http'
import ip from 'ip'
import { SuperfaceClient } from "@superfaceai/one-sdk";
import express from 'express'

const app = express()

const PORT = 8800

app.get('/', (req, res) => {
    const ipAddress = req.ip;
    const clientIp = ip.address();


    return res.json({ message: `Hello! Your IP address is: ${clientIp}` });
});

// const server = http.createServer((req, res) => {
//     const clientIp = ip.address();


//     const responseObj = {
//         client_ip: clientIp,
//     };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(responseObj));

// })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
}) 