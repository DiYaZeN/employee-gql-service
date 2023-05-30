/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor (private employeeService: EmployeeService)

    @Query(() => [Employee])
    findAll() {

    }



}
