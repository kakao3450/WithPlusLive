import io from "socket.io-client";

export const socket = io.connect("https://www.withplus.live", {
  cors: { origin: "*", reconnection: true },
});
