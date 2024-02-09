import { BookItem, BookResponse } from '@/types/book';

export const mapBookResponse = async (res: BookResponse) => {
  const bookInfo = res.items.map((book: BookItem) => ({
    id: book.id,
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors,
    summary: book.volumeInfo.subtitle,
    image: book.volumeInfo.imageLinks?.smallThumbnail,
    link: book.volumeInfo.infoLink,
  }));

  return bookInfo;
};
