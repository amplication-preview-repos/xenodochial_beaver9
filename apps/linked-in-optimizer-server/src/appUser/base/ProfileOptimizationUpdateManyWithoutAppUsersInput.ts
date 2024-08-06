/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProfileOptimizationWhereUniqueInput } from "../../profileOptimization/base/ProfileOptimizationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProfileOptimizationUpdateManyWithoutAppUsersInput {
  @Field(() => [ProfileOptimizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileOptimizationWhereUniqueInput],
  })
  connect?: Array<ProfileOptimizationWhereUniqueInput>;

  @Field(() => [ProfileOptimizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileOptimizationWhereUniqueInput],
  })
  disconnect?: Array<ProfileOptimizationWhereUniqueInput>;

  @Field(() => [ProfileOptimizationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileOptimizationWhereUniqueInput],
  })
  set?: Array<ProfileOptimizationWhereUniqueInput>;
}

export { ProfileOptimizationUpdateManyWithoutAppUsersInput as ProfileOptimizationUpdateManyWithoutAppUsersInput };