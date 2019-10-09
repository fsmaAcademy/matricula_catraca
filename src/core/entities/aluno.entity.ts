import { PessoaEntity } from "./pessoa.entity";
import { MatriculaEntity } from "./matricula.entity";
import { Entity, OneToMany } from "typeorm";

@Entity('alunos')
export class AlunoEntity extends PessoaEntity{

    @OneToMany(type => MatriculaEntity, matricula => matricula.aluno)
    public matricula!: MatriculaEntity[];

}