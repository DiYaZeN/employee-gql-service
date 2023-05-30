/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
// import { InjectRepository } from '@nestjs/typeorm'; 

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor (private employeeService: EmployeeService){}

    @Query(() => [Employee,{name:"getAllEmployees"}])
    findAll() {
        return this.employeeService.findAll();
    }



}
