import { MatriculaEntity } from "./matricula.entity";
import { DiaLetivoEntity } from "./dia-letivo.entity";
import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";

@Entity('matriculas_dias_letivos')
export class MatriculaDiaLetivoEntity{
    @PrimaryGeneratedColumn("uuid")
    public id!:string;

    @Column()
    public presente!: boolean;

    @Column()
    public idMatricula!: string;
    
    @Column()
    public idDiaLetivo!: string;
    
    @ManyToOne(type => MatriculaEntity, m => m.matriculaDiaLetivos)
    public matricula!: MatriculaEntity;

    @ManyToOne(type => DiaLetivoEntity, d => d.matriculaDiaLetivos)
    public diaLetivo!: DiaLetivoEntity;

}  