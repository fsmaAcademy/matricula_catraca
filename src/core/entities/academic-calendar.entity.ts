import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PresenceType } from '../enums/presence-type';
import { StudentEntity } from './student.entity';
import { AcademicClassEntity } from './academic-class.entity';

@Entity('academic_calendars')
export class AcademicCalendarEntity {

    @PrimaryGeneratedColumn('uuid', { name: 'id'})
    public id: string;

    @Column('timestamp', { name: 'datetime'})
    public dateTime: Date;

    @Column('varchar', { name: 'presence', length: 31 })
    public isPresence: PresenceType;

    @OneToMany(type => AcademicClassEntity, ac => ac.academicCalendar)
    public academicClass: AcademicClassEntity[];
}
