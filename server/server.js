import * as http from 'http';

const server = http.createServer((req,res) => {
    res.end('server response');

});
