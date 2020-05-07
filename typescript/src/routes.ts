import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

  const user = createUser({
    email: 'edgardlevy@gmail.com',
    password: '123456',
    techs: ['a', 'b', { title: 'teste', experience: 123 }]
  })

  return response.json(user)
  //return response.json({message:'Hello World'})
}
