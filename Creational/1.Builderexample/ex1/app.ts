/**
 * Ref: https://medium.com/better-programming/lets-look-at-the-builder-pattern-in-typescript-fb9cf202c04d
 */

import { UserBuilder } from "./userBuilder";
import { User } from "./interface";

const userWithName: User = new UserBuilder()
  .name("John")
  .build();


  const userWithGender: User = new UserBuilder()
  .gender("Female")
  .build();