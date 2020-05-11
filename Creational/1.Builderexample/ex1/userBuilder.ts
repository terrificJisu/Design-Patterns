import {User} from "./interface";

export class UserBuilder {
  private readonly _user: User;

  constructor() {
    this._user = {
      name: "",
      age: 0,
      gender: ""
    };
  }

  name(name: string): UserBuilder {
    this._user.name = name;
    return this;
  }
  
  age(age: number): UserBuilder {
    this._user.age = age;
    return this;
  }
  
  gender(gender: string): UserBuilder {
    this._user.gender = gender;
    return this
  }

  build(): User {
    return this._user;
  }
}
