import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { config } from 'process';

@Module({
  controllers: [ContactController],
  providers: [ContactService],

})
export class ContactModule {}
