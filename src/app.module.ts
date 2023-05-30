/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  }), TypeOrmModule.forRoot({
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'root',
    database : 'employee',
    entities : ['dist/**/*.entity{.ts,.js}'],
    logging : true,
    synchronize : true,
  })
  ],
  controllers: [],
  providers: [],
  
})


// @Module({
//   imports: [EmployeeModule,GraphQLModule.forRoot<ApolloDriverConfig>({
//     driver: ApolloDriver,   
//     autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
//   }), TypeOrmModule.forRoot({
//     type : 'postgres',
//     host : 'localhost',
//     port : 5432,
//     username : 'postgres',
//     password : 'root',
//     database : 'employee',
//     entities : ['dist/**/*.entity{.ts,.js}'],
//   })],

//   controllers: [],
//   providers: [],
//   // controllers: [AppController],
//   // providers: [AppService],
// })
export class AppModule { }
