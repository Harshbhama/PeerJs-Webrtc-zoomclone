const io = require("socket.io")(3000, {
    cors: {
        origin: "http://localhost:3002",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    socket.on('join-room', (roomId, userId) => {
      console.log("in join room");
      socket.join(roomId)
      socket.to(roomId).emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).emit('user-disconnected', userId)
      })
    })
  });
console.log("Hello")