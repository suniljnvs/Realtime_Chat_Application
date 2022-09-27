// This is node server handdle socket.io connection

const io = require("socket.io")(3000)
const users ={}

// new-user-joined,send ,receive these are event coustom name mai khud se rkha hu aap kuchh bhi rkha sakte ho
io.on('connection',socket =>{
    socket.on('new-user-joined', name =>{
        console.log("New user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name) // jo message karega usko chhod ke sbko message bhejega like -sunil are join
    });
    socket.on('send',message =>{
        socket.broadcast.emit('receive',{message : message, name : users[socket.id]})
    });
})
