import { Gender } from '../enums/gender';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('person')
export class PersonEntity {

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('varchar', { name: 'full_name', length: 127})
    public fullname: string;

    @Column('timestamp', { name: 'birthday' })
    public birthday: Date;

    @Column('varchar', { name: 'mother_name', length: 127 })
    public motherName: string;

    @Column('varchar', { name: 'father_name', length: 127 })
    public fatherName: string;

    @Column('varchar', { name: 'email', length: 127 })
    public email: string;

    @Column('varchar', { name: 'rg', length: 63 })
    public rg: string;

    @Column('varchar', { name: 'cpf', length: 63 })
    public cpf: string;

    @Column('varchar', { name: 'gender', length: 31 })
    public gender: Gender;
}
