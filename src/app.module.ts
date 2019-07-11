import { Module } from '@nestjs/common';
import { BackofficeModule } from './modules/backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://samuelbrehm:s11b2p86@cluster0-xyrkx.mongodb.net/test?retryWrites=true&w=majority',
    ),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
