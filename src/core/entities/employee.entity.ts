import { PersonEntity } from './person.entity';
import { Entity } from 'typeorm';

@Entity('employee')
export class EmployeeEntity extends PersonEntity {
}
