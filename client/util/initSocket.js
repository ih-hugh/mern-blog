import io from 'socket.io-client';
export const socket = process.env.NODE_ENV === 'development'
  ? io.connect('http://localhost:8000')
  : io.connect('http://mern-blog.herokuapp.com/');
