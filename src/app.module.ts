import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  //Verbos
  controllers: [],
  //Services
  providers: [],
})
export class AppModule {}
