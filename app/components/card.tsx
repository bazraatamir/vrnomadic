// components/NatureCard.tsx
"use client";
import Image from "next/image";

export default function NatureCard() {
  return (
    <div className='max-w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-lg'>
      <div className='relative w-full h-full'>
        <Image
          src='/pexels-ozgomz-7566890.jpg' // өөрийн зурагны path-г энд тавина
          alt='Nature'
          layout='fill'
          objectFit='cover'
          className='rounded-t-2xl'
        />
        <div className='absolute  bg-white text-blue-900 font-bold py-1 px-3 rounded-br-md'>
          ГАЗАРЫН НЭР
        </div>
        <div className='absolute bottom-0 w-[85%] right-0 bg-white p-4 rounded-tl-md'>
          <p className='text-gray-700 text-[12px]'>
            БАЙГАЛЬ БОЛ ХҮНИЙ АМЬДРАЛЫН ЭХ СУРВАЛЖ, ТАЙВШРАЛ, АМАР АМГАЛАНГИЙН
            ОРОН ЗАЙ ЮМ.
          </p>
        </div>
      </div>
    </div>
  );
}
