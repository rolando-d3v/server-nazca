import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  codigo: string;

  @Column()
  numero: number;

  @Column()
  indicativo: string;

  @Column()
  asunto: string;

  @Column()
  copia: string;

  @Column()
  city: string;

  @Column()
  url: string;

  @Column()
  userReg: string;

  @Column()
  userMod: string;

  @Column()
  tipoDoc: string;

  @Column()
  clasificacion: string;

  @Column()
  prioridad: string;

  @CreateDateColumn()
  fechaReg: Date;

  @UpdateDateColumn()
  fechaMod: Date;
  
}

