const axios = require('axios');

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { console.log('a user connected', socket.id); });
server.listen(3000);

setInterval(() => {
    axios.post("https://api.livecoinwatch.com/coins/single", {
        currency: "USD",
        code: "ETH",
        meta: true
    },
        {
            headers: {
                "content-type": "application/json",
                "x-api-key": "47a524c7-b9c8-40e9-b30d-81851d7a5d21"
            }
        })
        .then(response => {
            io.emit('coin', [response.data.rate]);
             console.log(response.data.rate);

        })
        .catch(error => {
            // handle error
            console.error(error);
        });
}, 5000);