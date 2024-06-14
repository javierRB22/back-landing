import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
 
 
 
@Schema()
export class Contact extends Document{
    @Prop({required:true})
    name:string;
    @Prop({required:true})
    email:string;
    @Prop({required:true})
    telefono:number;
    @Prop({required:true})
    cedula:number;
    @Prop({required:true})
    lugar:string;
    @Prop({required:true})
    comentario: string;

    // @Prop(raw([{
    //     name:{type:String},
    //     value:{type:Number},
    //     status:{type:Boolean}
    // }]))
    // data:any[];
}
export const ContactSchema = SchemaFactory.createForClass(Contact);
 