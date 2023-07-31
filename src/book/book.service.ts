import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Book, Prisma } from '@prisma/client';
@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async findAllBooks(): Promise<Book[]> {
    return this.prismaService.book.findMany();
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.prismaService.book.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createBook(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prismaService.book.create({
      data: data,
    });
  }

  async deleteBook(id: number): Promise<Book> {
    return this.prismaService.book.delete({
      where: {
        id: id,
      },
    });
  }

  async updateBook(id: number, data: Prisma.BookUpdateInput): Promise<Book> {
    return this.prismaService.book.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
