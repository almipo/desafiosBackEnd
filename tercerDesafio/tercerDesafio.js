import http from 'http'; 
 
const server = http.createServer((request, response) => {
    response.end('hola backend')

})

server.listen(8080, ()=>{
    console.log('server listen in port 8080')

})  