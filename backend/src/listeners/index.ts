import fs from "fs"; 
import path from "path";
import { Server } from "socket.io";

export function initializeListeners(io : Server) {
    // Get the full path for the listeners 
    const listenersPath = path.resolve(__dirname);

    fs.readdir(listenersPath, (err, files) => {
        if (err) {
            console.error(err);
        }

        files.map(file => {
            if (file !== "index.ts") {
                console.debug(`Initializing listener at ${file}`);
                // Initialize the listener
                const listener = (require(path.resolve(__dirname, file)).default)(io);
            }
        });
    });
}