/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Field()
    firstName: string;

    @Column()
    @Field()
    lastName: string;
    
    @Column()
    @Field()
    designation: string;

    @Column({nullable: true})
    @Field({nullable: true})
    city: string;
}
 