import BookCard from '@/components/Card';
import { Book } from '@/types/book';

const mockBook: Book = {
  id: 2,
  title: 'Mock Book',
  summary:
    "In the mysterious city of Eldoria, a forgotten diary surfaces, revealing the untold tale of a time-traveling librarian. As she navigates through paradoxes and love across centuries, the pages unravel a secret that could reshape the fabric of reality. 'Whispers of Eternity' captivates with each turn, blurring the line between fiction and fate.",
  image: '/images/placeholder.jpg',
  rating: 3,
  link: 'https://google.com',
  genre: 'fantasy',
};

export default function Page() {
  return <BookCard {...mockBook} />;
}
