import { DisciplinaEntity } from "./disciplina.entity";
import { DiaLetivoEntity } from "./dia-letivo.entity";
import { ProfessorEntity } from "./professor.entity";

import { MatriculaEntity } from "./matricula.entity";
import { ManyToOne, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";

@Entity('turmas')
export class TurmaEntity{

    @PrimaryGeneratedColumn("uuid")
    public id:string;
    
    @ManyToOne(type=>DisciplinaEntity, disciplina => disciplina.turma)
    public disciplina: DisciplinaEntity;

    @OneToMany(type => DiaLetivoEntity, diaLetivos => diaLetivos.turma)
    public diaLetivos: DiaLetivoEntity[];
    
    @ManyToOne(type => ProfessorEntity, professor => professor.turmas)
    public professor: ProfessorEntity;

    @OneToMany(type => MatriculaEntity, matricula => matricula.turma)
    public matricula!: MatriculaEntity[];
}