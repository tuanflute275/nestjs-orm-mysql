/* eslint-disable prettier/prettier */
import { BaseEntity } from "src/common/mysql/base.entity";
import { Column, Entity } from "typeorm";

@Entity({
    name: 'user'
})
export class UserEntity extends BaseEntity {
    
    @Column({
        length: 50
    })
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: false })
    isActive: boolean;
}