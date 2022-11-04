import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv'

import "reflect-metadata";
import { createConnection } from 'typeorm';
// import ActiveDirectory from "activedirectory2";
import authRoutes from "./api/auth/auth.routes";

dotenv.config()

const app = express();

const port = 4000;
//server app
app.listen(port, () => {
  console.log(`🔥  🚀  server runn port ➡️ ... ${port} 😃  ✔️`);
});


//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use("/auth", authRoutes);
// app.use('/cursos', cursosRoutes)



//db server
createConnection()
    .then(() => console.log('db mysql connected'))
    .catch(error => console.log({ msn: "Error: Connectionn", error }));












// let config = {
//   // url: "ldap://severilex.com.pe:389/DC=severilex,DC=com,DC=pe",
//   url: "ldap://severilex.com.pe",
//   baseDN: "serverilex.com.pe",
//   // username: "risco@severilex.com.pe",
//   // password: "Oscanova123",
//   username: "44974829@severilex.com.pe",
//   password: "20Peru22",
// };

// let ad = new ActiveDirectory(config);
// let dominio: string = "@severilex.com.pe";
// let user = "etuñoque";
// let username = user + dominio;
// let password = "Reivaj.239**";

// // let username = "44974829@severilex.com.pe";
// // let password = "20Peru22";

// ad.authenticate(username, password, function (err, auth) {
//   if (err) {
//     console.log("ERROR: " + JSON.stringify(err));
//     return;
//   }

//   if (auth) {
//     console.log("Authenticated!");
//   } else {
//     console.log("Authentication failed!");
//   }
// });
