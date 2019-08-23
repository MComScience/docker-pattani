const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

const EVENTS = {
  ON_REGISTER: 'REGISTER',
  ON_CALL_WAIT: 'CALL_WAIT',
  ON_END_WAIT: 'END_WAIT',
  ON_RECALL: 'RECALL',
  ON_HOLD: 'HOLD',
  ON_END: 'END',
  ON_CALL_HOLD: 'CALL_HOLD',
  ON_END_HOLD: 'END_HOLD',
  DEVICE_CONNECTED: 'DEVICE_CONNECTED',
  CARD_INSERTED: 'CARD_INSERTED',
  READING_START: 'READING_START',
  CARD_REMOVED: 'CARD_REMOVED',
  DEVICE_DISCONNECTED: 'DEVICE_DISCONNECTED',
  READING_COMPLETE: 'READING_COMPLETE',
  READING_FAIL: 'READING_FAIL',
  CLOSE_PRINT: 'CLOSE_PRINT',
  UPDATED_SETTINGS: 'UPDATED_SETTINGS',
  AUDIO_PLAYING: 'AUDIO_PLAYING',
  AUDIO_ENDED: 'AUDIO_ENDED',
  UPDATED_QUEUE: 'UPDATED_QUEUE'
};

app.get('/api-v1', function (req, res) {
  res.json({
    success: true,
    status: 200,
    data: {
      message: 'API'
    }
  })
});

io.on('connection', function (socket) {
  socket.on(EVENTS.DEVICE_CONNECTED, function(res) {
    socket.broadcast.emit(EVENTS.DEVICE_CONNECTED, res)
  });

  socket.on(EVENTS.CARD_INSERTED, function(res) {
    socket.broadcast.emit(EVENTS.CARD_INSERTED, res)
  });

  socket.on(EVENTS.READING_START, function(res) {
    socket.broadcast.emit(EVENTS.READING_START, res)
  });

  socket.on(EVENTS.CARD_REMOVED, function(res) {
    socket.broadcast.emit(EVENTS.CARD_REMOVED, res)
  });

  socket.on(EVENTS.DEVICE_DISCONNECTED, function(res) {
    socket.broadcast.emit(EVENTS.DEVICE_DISCONNECTED, res)
  });

  socket.on(EVENTS.READING_COMPLETE, function(res) {
    socket.broadcast.emit(EVENTS.READING_COMPLETE, res)
  });

  socket.on(EVENTS.READING_FAIL, function(res) {
    socket.broadcast.emit(EVENTS.READING_FAIL, res)
  });

  socket.on(EVENTS.ON_REGISTER, function(res) {
    socket.broadcast.emit(EVENTS.ON_REGISTER, res)
  });

  socket.on(EVENTS.ON_CALL_WAIT, function(res) {
    socket.broadcast.emit(EVENTS.ON_CALL_WAIT, res)
  });

  socket.on(EVENTS.ON_END_WAIT, function(res) {
    socket.broadcast.emit(EVENTS.ON_END_WAIT, res)
  });

  socket.on(EVENTS.ON_RECALL, function(res) {
    socket.broadcast.emit(EVENTS.ON_RECALL, res)
  });

  socket.on(EVENTS.ON_HOLD, function(res) {
    socket.broadcast.emit(EVENTS.ON_HOLD, res)
  });

  socket.on(EVENTS.ON_END, function(res) {
    socket.broadcast.emit(EVENTS.ON_END, res)
  });

  socket.on(EVENTS.ON_CALL_HOLD, function(res) {
    socket.broadcast.emit(EVENTS.ON_CALL_HOLD, res)
  });

  socket.on(EVENTS.ON_END_HOLD, function(res) {
    socket.broadcast.emit(EVENTS.ON_END_HOLD, res)
  });

  socket.on(EVENTS.AUDIO_PLAYING, function(res) {
    socket.broadcast.emit(EVENTS.AUDIO_PLAYING, res)
  });

  socket.on(EVENTS.AUDIO_ENDED, function(res) {
    socket.broadcast.emit(EVENTS.AUDIO_ENDED, res)
  });

  socket.on('disconnect', function () {
    io.emit('disconnected')
  });
});

server.listen(PORT, function () {
  console.log(`Server is listening on ${PORT}`)
});