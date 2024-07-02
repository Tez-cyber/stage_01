import http from 'http'
import ip from 'ip'
import { SuperfaceClient } from "@superfaceai/one-sdk";



const PORT = 8800
const sdk = new SuperfaceClient();

const server = http.createServer((req, res) => {
    const clientIp = ip.address();
   
    const responseObj = {
        client_ip: clientIp,
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseObj));

})

server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})