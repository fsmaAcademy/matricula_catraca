import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AcademicCalendarEntity } from './academic-calendar.entity';
import { CourseEntity } from './course.entity';
import { TeacherEntity } from './teacher.entity';
import { GraduationEntity } from './graduation.entity';

@Entity('academic_classes')
export class AcademicClassEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('varchar', { name: 'registration', length: 31 })
    public registration: string;

    @ManyToOne(type => AcademicCalendarEntity, ac => ac.academicClass)
    @JoinColumn({ name: 'academic_calendar_id' })
    public academicCalendar: AcademicCalendarEntity;

    @ManyToOne(type => CourseEntity, c => c.academicClass)
    @JoinColumn({ name: 'course_id' })
    public course: CourseEntity;

    @ManyToOne(type => TeacherEntity, t => t.academicClass)
    @JoinColumn({ name: 'teacher_id' })
    public teacher: TeacherEntity;

    @ManyToOne(type => GraduationEntity, g => g.academicClass)
    @JoinColumn({ name: 'graduation_id' })
    public graduation: GraduationEntity;

}
