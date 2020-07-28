import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    vkLogin(req) {
        if (!req.user) {
          return 'No user from vk'
        }
    
        return {
          message: 'User information from vk',
          user: req.user
        }
      }
}
