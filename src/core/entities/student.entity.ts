import { PersonEntity } from './person.entity';
import { Entity, Column } from 'typeorm';

@Entity('student')
export class StudentEntity extends PersonEntity {
    @Column('varchar', { name: 'registration', length: 31 })
    registration: string;
}
