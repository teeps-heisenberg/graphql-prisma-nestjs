import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { PrismaService } from 'src/prisma.service';
import { BookResolver } from './book.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService, BookService, BookResolver],
})
export class BookModule {}
