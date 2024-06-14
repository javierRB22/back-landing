import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './contact.controller';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  create(createContactDto: CreateContactDto) {
    return createContactDto
    //throw new Error('Method not implemented.');
  }
  async sendContactEmail(createContactDto: CreateContactDto) {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'marpicoPrueba@gmail.com',
        pass: 'otfqgcofblxbtany',
      },
    });

    const mailOptions = {
      from: `${createContactDto.email}`,
      to: 'marpicoPrueba@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `
      Nombre: ${createContactDto.name}\n
      Email: ${createContactDto.email}\n
      Teléfono: ${createContactDto.telefono}\n
      Cédula: ${createContactDto.cedula}\n
      Desde donde nos contacta: ${createContactDto.lugar}\n
      Comentarios: ${createContactDto.comentario}
    `,
    };
    console.log(mailOptions)
    return transporter.sendMail(mailOptions);
  }
}
