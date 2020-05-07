
interface TechObject{
  title:string;
  experience:number;
}

interface CreateUserData {
  name?:string,
  email:string,
  password:string,
  techsMult?:Array<string | TechObject>,
  techs:string[]
}

export default function createUser({name,email,password, techs}:CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }
  return user
}
