import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
@Module({
  imports: [ClientesModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'sonoscompiuter',
    entities: [Cliente],
    synchronize: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
