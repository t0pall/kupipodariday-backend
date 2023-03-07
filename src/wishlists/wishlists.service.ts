import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wishlist } from './entities/wishlists.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private offerRepository: Repository<Wishlist>,
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
