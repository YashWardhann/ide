import { Server, Socket } from "socket.io";

export default function (io : Server) {
    io.on("disconnect", function(socket : Socket) {
        console.log("Ended connection!");
    });
}