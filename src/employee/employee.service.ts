/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
// import { find } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){
        
    }

    async findAll(): Promise<Employee[]>{
        return this.employeeRepository.find();
    }
    



}

