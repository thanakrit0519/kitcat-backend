import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
<<<<<<< HEAD

=======
>>>>>>> 4a29fef91c9fc484872061567126a0e6df1f0a08
@Module({
  imports: [RegisterModule,LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
