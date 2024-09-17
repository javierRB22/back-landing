import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

@Schema()
export class Contact extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  telefono: number;

  @Prop({ required: true })
  documento: string;

  @Prop({ required: true })
  identificacion: number;

  @Prop({ required: true })
  lugar: string;

  @Prop({ required: true })
  comentario: string;

  @Prop({ required: true })
  linea: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
