import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Strategy, VerifyCallback } from 'passport-vkontakte';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class VkStrategy extends PassportStrategy(Strategy, 'vkontakte') {

  constructor(
    private configService: ConfigService
  ) {
    super({
      clientID: configService.get<string>('VK_CLIENT_ID'),
      clientSecret: configService.get<string>('VK_SECRET'),
      callbackURL: 'http://localhost:3000/auth/vk/callback',
      scope: ['email'],
    });
  }

  async validate (accessToken: string, refreshToken: string, params: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    done(null, user);
  }
}