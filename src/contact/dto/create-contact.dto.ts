

import { IsEmail, IsNotEmpty, IsString, MinLength, IsInt, Min } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @MinLength(6, { message: 'El nombre debe tener al menos 6 caracteres' })
  name: string;

  @IsEmail({}, { message: 'Correo electrónico no válido' })
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  email: string;

  @IsInt()
  @Min(1, { message: 'El teléfono debe ser mayor que 0' })
  telefono: number;

  @IsInt()
  @Min(1, { message: 'La cédula debe ser mayor que 0' })
  cedula: number;

  @IsString()
  @IsNotEmpty({ message: 'El lugar es requerido' })
  @MinLength(6, { message: 'El lugar debe tener al menos 6 caracteres' })
  lugar: string;

  @IsString()
  @IsNotEmpty({ message: 'El comentario es requerido' })
  @MinLength(6, { message: 'El comentario debe tener al menos 6 caracteres' })
  comentario: string;
}
