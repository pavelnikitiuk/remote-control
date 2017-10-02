import io from 'socket.io-client';
import { socketUrl } from 'config';

const socket = io.connect(socketUrl);

export default socket;
