import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './entities/offers.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
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
