import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entity';
import * as bycrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { appErrors } from 'src/utils/app-errors';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async hashPassword(password: string) {
    return bycrypt.hash(password, 10);
  }

  async create(dto: CreateUserDto) {
    dto.password = await this.hashPassword(dto?.password);
    const user = await this.usersRepository.save(dto);
    return user;
  }

  async findOne(key: string, param: any) {
    const user = await this.usersRepository.findOneBy({ [key]: param });
    return user;
  }

  async updateOne(id: number, dto: UpdateUserDto) {
    if (dto.password) dto.password = await this.hashPassword(dto.password);
    try {
      return await this.usersRepository.update(id, dto);
    } catch (_) {
      throw new BadRequestException(appErrors.WRONG_DATA);
    }
  }

  async findMany(query: string) {
    const searchResult = await this.usersRepository.find({
      where: [{ email: Like(`%${query}%`) }, { username: Like(`%${query}%`) }],
    });
    return searchResult;
  }

  async findUsersWithWishes(id: number) {
    const users = await this.usersRepository.find({
      relations: { wishes: true },
      where: { id },
    });
    return users;
  }
}
