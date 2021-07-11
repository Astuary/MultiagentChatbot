import { prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectType, Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field({nullable: true})
  username?: string;

  @Field({nullable: true})
  email?: string;

  @Field({nullable: true})
  password?: string;
}

@ObjectType()
export class UserClass {
  @Field()
  @prop()
  username!: string;

  @Field()
  @prop()
  email!: string;

  @Field()
  @prop()
  password!: string;
}

export const User = getModelForClass(UserClass, {
  schemaOptions: { collection: 'users' }
});