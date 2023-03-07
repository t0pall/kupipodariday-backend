import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private offerRepository: Repository<User>,
  ) {}

  create() {}

  findOne() {}

  findMany() {}

  updateOne() {}

  removeOne() {}
}

// ○ создания (create),
// ○ поиска по условию одной (findOne) или нескольких записей,
// ○ обновления (updateOne) для одной записи,
// ○ удаления (removeOne) для одной записи.
