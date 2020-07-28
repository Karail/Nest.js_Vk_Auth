import { Controller, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Get('vk')
    @UseGuards(AuthGuard('vkontakte'))
    async vkAuth() { }

    @Get('/vk/callback')
    @UseGuards(AuthGuard('vkontakte'))
    vkAuthRedirect(@Req() req) {
        return this.authService.vkLogin(req)
    }
}
