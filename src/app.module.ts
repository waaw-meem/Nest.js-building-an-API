import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { TestModule } from './test/test.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule, 
    TestModule,
    MongooseModule.forRoot('mongodb+srv://wm401238:OkNWwfSnjBdP1mRy@cluster0.qjmf5kl.mongodb.net/nestIntro?retryWrites=true&w=majority&appName=Cluster0')
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
