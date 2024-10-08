import { Controller,  Post, Body,} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';


@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Post('sendEmail')
  sendEmail(@Body() createContactDto:CreateContactDto){
    console.log("Entro a enviar", createContactDto)
    return this.contactService.sendContactEmail(createContactDto);
  }


} 
export { CreateContactDto };


