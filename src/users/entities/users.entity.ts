import { Length, IsEmail, IsUrl } from 'class-validator';
import { Offer } from 'src/offers/entities/offers.entity';
import { Wish } from 'src/wishes/entities/wishes.entity';
import { Wishlist } from 'src/wishlists/entities/wishlists.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ unique: true })
  @Length(2, 30)
  username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @Length(2, 300)
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  @IsUrl()
  avatar: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToOne(() => Offer, (offer) => offer.user)
  offers: Offer;

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlists: Wishlist[];
}

// ○ wishes — список желаемых подарков. Используйте для него соответствующий тип связи.
// ○ offers — содержит список подарков, на которые скидывается пользователь. Установите для него подходящий тип связи.
// ○ Wishlists - содержит список вишлистов, которые создал пользователь. Установите для него подходящий тип связи.
