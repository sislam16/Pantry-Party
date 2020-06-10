const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('./auth/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth')
var recipesRouter = require('./routes/recipes');
var ingredientsRouter = require('./routes/ingredients');
var hashtagsRouter = require('./routes/hashtags');

var port = Number(process.env.PORT) || '3001';

const app = express();

var cors = require('cors')
app.use(cors())

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { origins: '*:*' });
;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('NOT_A_GOOD_SECRET'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'NOT_A_GOOD_SECRET',
    resave: false,
    saveUninitialized: true
})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/api/users', usersRouter);
app.use('/api/events', eventsRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/hashtags', hashtagsRouter);

io.sockets.on("error", e => console.log(e));

io.sockets.on("connection", socket => {
    socket.on("broadcaster", id => {
        broadcaster = id;
        console.log("broadcaster set", broadcaster)
        socket.emit("broadcaster", broadcaster);
    });
    socket.on("watcher", broadcasterId => {
        socket.to(broadcasterId).emit("watcher", socket.id);
        console.log("watcher set", socket.id)
        console.log("broadcasterId", broadcasterId)
    });
    socket.on("offer", (id, message) => {
        socket.to(id).emit("offer", socket.id, message);
        console.log("offer sent", message)
    });
    socket.on("answer", (id, message) => {
        socket.to(id).emit("answer", socket.id, message);
        console.log("answer sent")
    });
    socket.on("candidate", (id, message) => {
        socket.to(id).emit("candidate", socket.id, message);
        console.log("candidate", message)
    });
    socket.on('new-broadcaster', (broadcaster) => {
        socket.broadcast.emit('active-broadcaster', broadcaster)
        console.log("active-broadcaster emitted")
    });
    socket.on('disconnectPeer', () => {
        socket.emit('disconnectPeer')
    });
    socket.on('broadcastDisconnect', () => {
        socket.emit('broadcastDisconnect')
    });
    socket.on('new message', data => {
        console.log(data.room);
        socket.broadcast
            .to(data.room)
            .emit('receive message', data)
    });
    socket.on('room', data => {
        console.log('room join');
        console.log(data);
        socket.join(data.room);
    });
    socket.on('leave room', data => {
        console.log('leaving room');
        console.log(data);
        socket.leave(data.room)
    });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
