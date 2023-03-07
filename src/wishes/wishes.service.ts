import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wish } from './entities/wishes.entity';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private offerRepository: Repository<Wish>,
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
