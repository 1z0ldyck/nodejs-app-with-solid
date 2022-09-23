import { Express } from 'express';

import IRepository from '@interfaces/Repository'
import db from '@loaders/database' 

class UserRepository extends IRepository {

  findByEmail(email: string) {}

  save() {}

}

export default new UserRepository(db);