import { AlunoEntity } from "./aluno.entity";
import { TurmaEntity } from "./turma.entity";
import { MatriculaDiaLetivoEntity } from "./matricula-dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";

@Entity('matriculas')
export class MatriculaEntity{
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Column()
    public numero!: number;

    @Column()
    public faltas!: number;

    @Column()
    public nota!: number;

    @Column()
    public alunoId!: string;

    @Column()
    public turmaId!: string;
    
    @ManyToOne(type => AlunoEntity, aluno => aluno.matricula)
    public aluno!: AlunoEntity;
    
    @ManyToOne(type => TurmaEntity, turma => turma.matricula)
    public turma!: TurmaEntity;

    
    public matriculaDiaLetivos!: MatriculaDiaLetivoEntity[];
    
}