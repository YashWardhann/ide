import { Server, Socket } from "socket.io";

export default function (io : Server) {
    io.on("connection", function(socket : Socket) {
        console.log("Created new connection!");
    });
}