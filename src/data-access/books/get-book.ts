import { BookResponse } from '@/types/book';
import { mapBookResponse } from '@/use-cases/book-utils';

export const getBookInfo = async (query: string) => {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.BOOKS_API_KEY}`;

  try {
    const bookData = await fetch(apiUrl);
    const response: BookResponse = await bookData.json();

    const mappedBooks = await mapBookResponse(response);
    return mappedBooks;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
};
