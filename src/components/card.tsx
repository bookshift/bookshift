//@TO DO
//1. add logic for bookmark and save icons onclick events once the user model is created
//2. toggle the icon without the use of hooks (state, refs) and turning component into a client one
//3. styling still needs some touches

import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart, FaBookmark } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa6';
import { Book } from '@/types/book';
import StarRating from './Rating';

export default function BookCard({ ...props }: Book) {
  const linkProps = {
    href: `${props.link}`,
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <div className='border rounded-md overflow-hidden bg-white relative p-6'>
      <a {...linkProps}>
        <Image
          src={props.image}
          alt='book cover'
          className='w-full h-40 object-cover'
          width={318}
          height={180}
        />
      </a>

      <div className='absolute top-3 right-12'>
        <span className='px-2 py-1 rounded bg-gradient-to-r from-yellow-300 to-red-400'>
          {props.genre}
        </span>
      </div>

      <h2>
        <Link {...linkProps} className='block mt-3 mb-1 font-semibold'>
          {props.title}
        </Link>
      </h2>
      <h3 className='text-sm text-dimmed leading-5 line-clamp-4'>
        {props.summary}
      </h3>

      <div className='mt-4 flex justify-between'>
        <Link
          href={`/request/new?book=${encodeURIComponent(props.id)}`}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'
        >
          Request
        </Link>

        <div className='flex gap-4'>
          <div className='bg-slate-200 hover:bg-sky-700 p-2 rounded-md flex items-center cursor-pointer'>
            <StarRating rating={props.rating} />
          </div>
          <div className='bg-slate-200 hover:bg-sky-700 p-2 rounded-md flex items-center cursor-pointer'>
            <FaRegHeart style={{ width: '1rem', height: '1rem' }} color='red' />
          </div>
          <div className='bg-slate-200 hover:bg-sky-700 p-2 rounded-md flex items-center cursor-pointer'>
            <FaRegBookmark
              style={{ width: '1rem', height: '1rem' }}
              color='yellow'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
