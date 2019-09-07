import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { AcademicClassEntity } from './academic-class.entity';

@Entity('course')
export class CourseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('varchar', { name: 'public_place', length: 127 })
    public title: string;

    @OneToMany(type => AcademicClassEntity, ac => ac.course)
    public academicClass: AcademicClassEntity[];
}
