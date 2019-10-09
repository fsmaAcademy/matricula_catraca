import { TurmaEntity } from "./turma.entity";
import { MatriculaDiaLetivoEntity } from "./matricula-dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('dias_letivos')
export class DiaLetivoEntity{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column('timestamp')
    public dia: Date;

    @ManyToOne(type => TurmaEntity, turma => turma.diaLetivos)
    public turma: TurmaEntity;

    @OneToMany(type => MatriculaDiaLetivoEntity, m => m.diaLetivo)
    public matriculaDiaLetivos!: MatriculaDiaLetivoEntity[];
}