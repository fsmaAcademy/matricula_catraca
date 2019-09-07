import { PublicPlaceType } from '../enums/public-place-type';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('addresses')
export class AddressEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('varchar', { name: 'public_place', length: 255 })
    public publicPlace: string;

    @Column('varchar', { name: 'district', length: 63 })
    public district: string;

    @Column('varchar', { name: 'city', length: 63 })
    public city: string;

    @Column('varchar', { name: 'federate_unit', length: 63 })
    public federateUnit: string;

    @Column('varchar', { name: 'initials_federate_unit', length: 4})
    public initialsFederateUnit: string;

    @Column('varchar', { name: 'public_place_type', length: 31 })
    public publicPlaceType: PublicPlaceType;
}
