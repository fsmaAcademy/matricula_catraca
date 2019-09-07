import { EmployeeEntity } from './employee.entity';
import { Entity, OneToMany } from 'typeorm';
import { AcademicClassEntity } from './academic-class.entity';

@Entity('teacher')
export class TeacherEntity extends EmployeeEntity {

    @OneToMany(type => AcademicClassEntity, ac => ac.teacher)
    public academicClass: AcademicClassEntity[];
}
