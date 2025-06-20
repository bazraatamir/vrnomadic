import NatureCard from "@/app/components/card";
import Carousel from "@/app/components/swiper";
export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>;
}) {
  const {slug} = await params;
  return (
    <div className='container bg-white mx-auto'>
      <section className=' mx-auto p-4 mt-16'>
        <div className='w-full mx-auto h-[600px] relative overflow-hidden'>
          <img
            src='/pexels-matheusnatan-2149422.jpg'
            className='object-cover w-full h-full rounded-lg shadow-lg'
            alt=''
          />
          <h1 className='absolute bottom-4 left-4 text-white text-2xl font-bold'>
            {slug}
          </h1>
        </div>
      </section>
      <section className=' mx-auto p-4 mt-16'>
        <h2 className='text-xl font-bold mb-2 text-gray-700'>БАЙГАЛЬ</h2>
        <div className='pt-4'>
          <Carousel />
        </div>
      </section>
      <section className=' mx-auto p-4 mt-16'>
        <h2 className='text-xl font-bold mb-2 text-gray-700'>МУЗЕЙ</h2>
        <div className='pt-4'>
          <Carousel />
        </div>
      </section>
      <section className=' mx-auto p-4 mt-16'>
        <h2 className='text-xl font-bold mb-2 text-gray-700'>УРЛАГ, ӨВ СОЁЛ</h2>
        <div className='pt-4'>
          <Carousel />
        </div>
      </section>
      <footer className='bg-white shadow-lg mt-16'>
        <div className=' text-center py-4 mt-16'>
          <p className='text-[#2E3192] text-[12px]'>© 2025 VRNOMADIC</p>
          <p className='text-[#2E3192] text-[12px]'>
            Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </footer>
    </div>
  );
}
