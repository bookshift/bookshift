import { FaStar, FaRegStar } from 'react-icons/fa';

type StarRatingProps = {
  rating: number;
  color?: string;
};

export default function StarRating({ rating, color }: StarRatingProps) {
  const ceilRating = Math.ceil(rating);
  const fullStars = Array.from({ length: ceilRating }, (_, index) => (
    <FaStar key={index} className='w-4 h-4 text-yellow-500' />
  ));

  const emptyStars = Array.from({ length: 5 - ceilRating }, (_, index) => (
    <FaRegStar key={index} className='w-4 h-4 text-yellow-500' />
  ));

  return (
    <div className='flex'>
      {fullStars}
      {emptyStars}
    </div>
  );
}
