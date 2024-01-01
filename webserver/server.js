const http = require("http")

const app = require('./app')

const port = process.env.port || 3000

const server = http.createServer(app)


const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  path: "/socket",
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);
    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
    socket.on("chat", (content) => {
      socket.broadcast.to(roomId).emit("new-message", content);
    });
  });
}); 


server.listen(port, (req, res) => {
  console.log('listen on port 3000')
})



