import { Module } from '@nestjs/common';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from './modules/store/store.module';
import { AgendaModule } from './modules/agenda/agenda.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING,
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'devnode',
      password: 'node',
      database: '7180',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BackofficeModule,
    StoreModule,
    AgendaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
