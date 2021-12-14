import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { tokenProviders } from './token.providers';
import { TokenService } from './token.service';
import { TokenController } from './token.controler';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), UsuarioModule ],
  controllers: [ TokenController ],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}