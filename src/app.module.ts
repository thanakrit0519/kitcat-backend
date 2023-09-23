import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [RegisterModule,LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
