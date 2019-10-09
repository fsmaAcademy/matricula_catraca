import { PessoaEntity } from "./pessoa.entity";
import { Entity, OneToMany } from "typeorm";
import { TurmaEntity } from "./turma.entity";

@Entity('professores')
export class ProfessorEntity extends PessoaEntity{
    @OneToMany(type => TurmaEntity, turma => turma.professor)
    public turmas: TurmaEntity[];
}