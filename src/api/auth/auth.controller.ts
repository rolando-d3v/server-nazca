import { Request, Response } from "express";
import { RequestHandler } from "express";
import { getRepository } from "typeorm";
import ActiveDirectory from "activedirectory2";

// import { User } from "../../entity/User";

let config = {
  // url: "ldap://severilex.com.pe:389/DC=severilex,DC=com,DC=pe",
  url: "ldap://severilex.com.pe",
  baseDN: "serverilex.com.pe",
  // username: "risco@severilex.com.pe",
  // password: "Oscanova123",
  username: "44974829@severilex.com.pe",
  password: "20Peru22",
};



// ! AUTH IN ACTIVEDIRECTORY
// !----------------------
export const authActiveDirectory = async (req: Request, res: Response) => {
  try {
    const dni = req.body.dni;
    const password = req.body.password;

    let ad = new ActiveDirectory(config);
    let dominio: string = "@severilex.com.pe";
    // let dni = "etuñoque";
    let username = dni + dominio;
    // let password = "Reivaj.239**";

    // let username = "44974829@severilex.com.pe";
    // let password = "20Peru22";

    ad.authenticate(username, password, function (err, auth) {
      if (err) {
        return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
      }

      if (auth) {
        return res.json({ msn: "Login successfully 😃 ✔️" });
      } else {
        return res
          .status(500)
          .json({ msn: "Error: Authentication failed! 😕 ❗️❗️" });
      }
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

// ! OBTIENE ALL REGISTRO
// !----------------------
export const getUsers: RequestHandler = async (req, res) => {
  try {
    // const registro = await getRepository(User).find({});
    return res.json("hello world");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

// //CREATE ONE REGISTRO
// //********************************/
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const user = new User();
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.cursos = req.body.cursos;

//     // const curso = new Curso_so1_tec();
//     //save registro
//     await getRepository(User).save(user);
//     return res.json({ msn: "Registro created success 😃 ✔️" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
//   }
// };
