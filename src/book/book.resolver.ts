import { Book as BookModel } from '@prisma/client';
import { BookService } from './book.service';
import { Args, Int, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { AddBookArgs } from './args/add.book.args';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks(): Promise<BookModel[]> {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { name: 'findBookById', nullable: true })
  getBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): Promise<BookModel> {
    return this.bookService.getBookById(id);
  }

  @Mutation((returns) => Book, { name: 'deleteBook' })
  deleteBookById(
    @Args({ name: 'bookId', type: () => Int }) id: number,
  ): Promise<BookModel> {
    return this.bookService.deleteBook(id);
  }

  @Mutation((returns) => Book, { name: 'addBook' })
  addBook(@Args('addBookArgs') addBookArgs: AddBookArgs): Promise<BookModel> {
    return this.bookService.createBook(addBookArgs);
  }

  @Mutation((returns) => Book, { name: 'updateBook' })
  updateBook(
    @Args({ name: 'bookId', type: () => Int }) id: number,
    @Args('updateBookArgs') updateBookArgs: AddBookArgs,
  ): Promise<BookModel> {
    return this.bookService.updateBook(id, updateBookArgs);
  }
}
