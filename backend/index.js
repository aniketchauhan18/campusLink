const express = require('express');
const app = express();
const http = require('http') // to build the server with socket.io
const cors = require('cors');
const { Server } = require('socket.io');
const groupRoutes = require('./routes/groups');
const formatMessages = require('./utils/messages');
const {userJoin, getCurrentUser, getRoomUsers, userLeave} = require('./utils/users')
const lostRoutes = require('./routes/lost')
const foundRoutes = require('./routes/found')
const messReviewRoutes = require('./routes/messReview')

const PORT = 3000 | process.env.PORT


app.use(cors());
app.use(express.json())

const server = http.createServer(app);
app.use('/groups', groupRoutes);
app.use('/lost', lostRoutes);
app.use('/found',foundRoutes)
app.use('/mess', messReviewRoutes);


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const botName = 'BinaryBurst'

io.on('connection', (socket) => {

  socket.on('joinRoom', ({username, room}) => {
    const user = userJoin(socket.id, username, room)
    console.log(username)
    socket.join(user.room)


    // Welcome the current user
    socket.emit('message', formatMessages(botName, 'Welcome you to the chat')); // emit to particular user

    //BroadCast when a user connects
    socket.broadcast
      .to(user.room)
      .emit('message', formatMessages(botName ,`${user.username} has joined the chat`)); //to all the clients except the client that is connecting

    // send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    })
  })


  // Listen for chatMessage
  socket.on('chatMessage', (message) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessages(user.username, message))
  })

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit('message', formatMessages(botName, `${user.username} has left the chat`));
      // send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      }) 
    }
    
  });
})

server.listen(PORT, () => {
  console.log("Server is running")
})