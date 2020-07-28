import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { VkStrategy } from './vk.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, VkStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
