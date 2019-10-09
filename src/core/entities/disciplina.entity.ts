import { TurmaEntity } from "./turma.entity";
import{ManyToOne, OneToMany, PrimaryGeneratedColumn, Entity, Column} from "typeorm";

@Entity('disciplinas')
export class DisciplinaEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column('varchar', { length: 255 })
    public nome: string;
    
    @OneToMany(type => TurmaEntity, turma => turma.disciplina)
    public turma: TurmaEntity[];
    
}