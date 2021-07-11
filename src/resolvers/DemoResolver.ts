import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User, UserClass, UserInput } from "../models/User";

@Resolver()
export class DemoResolver {
  @Query(() => String)
  hello(
    @Arg("name", { nullable: false }) name: string
  ) {
    return `Hi ${name}!`;
  }

  @Mutation(() => Boolean)
  async addUser(
    @Arg("username") username: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    try {
      const newUser = new User({ username, email, password });
      await newUser.save();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Query(() => [UserClass])
  async allUsers() {
    const users = await User.find({});
    return users;
  }

  @Mutation(() => Boolean)
  async updateUser(
    @Arg("email") email: string,
    @Arg("user") newUser: UserInput
  ) {
    try {
      const user = await User.findOneAndUpdate({ email }, { ...newUser });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("email") email: string
  ) {
    try {
      const user = await User.findOneAndDelete({ email });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}