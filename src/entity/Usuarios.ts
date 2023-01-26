import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Length } from "class-validator";

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn("uuid")
  per_id: string;

  @Column( "varchar", {length: 8} )
  @Length(8, 8, { message: "Password Debe tener al menos 8 caracteres" })
  per_dni: string;

  @Column()
  per_password: string;

  @Column()
  per_acc_sistema: string;

  @Column()
  per_sistema: string;
}
