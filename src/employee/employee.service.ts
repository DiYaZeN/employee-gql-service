/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: EmployeeRepository){
        
    }

    async findAll(): Promise<Employee[]>{
        return this.employeeRepository.find();
    }



}

