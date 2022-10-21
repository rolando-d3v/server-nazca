import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length } from "class-validator";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Length(8, 8, { message: "Password Debe tener al menos 8 caracteres" })
  dni: string;

  @Column()
  serie: string;


  @Column()
  nombres: string;

  @Column()
  apellPat: string;

  @Column()
  apellMat: string;
  

  @Column()
  fechNac: string;

  @Column()
  nace: string;

  @Column()
  vive: string;

  @Column()
  IPv4: string;


}







