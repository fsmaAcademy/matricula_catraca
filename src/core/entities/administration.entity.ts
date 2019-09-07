import { EmployeeEntity } from './employee.entity';
import { Entity } from 'typeorm';

@Entity('administration')
export class AdministrationEntity extends EmployeeEntity {
}
