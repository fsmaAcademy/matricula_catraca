import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity('pessoas')
export class PessoaEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column('varchar', { length: 255 })
    public nome: string;

    @Column('timestamp')
    public dataNascimento: Date;

    @Column('varchar', { length: 255 })
    public bairro: string;

    @Column('varchar', { length: 255 })
    public cidade: string;

    @Column('varchar', { length: 255 })
    public estado: string;

    @Column('varchar')
    public digital: string; 
}