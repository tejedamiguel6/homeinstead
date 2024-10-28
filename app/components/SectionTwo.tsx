import Image from 'next/image'
import { homePageSection_two } from '../lib/graphql-api'
import { richTextRender } from '../utils/richTextRender'

export default async function SectionTwo() {
  const sectionTwo = await homePageSection_two()
  const imageUrl = sectionTwo?.sectionTwo?.image?.url

  return (
    <div className='flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-gradient-to-r from-white to-blue-50'>
      {imageUrl && (
        <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0'>
          <div className='w-48 h-48 rounded-full overflow-hidden shadow-md'>
            <Image
              width={300}
              height={300}
              src={imageUrl}
              alt={sectionTwo.sectionTwo.image.title}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      )}

      <div className='w-full md:w-2/3 md:ml-8'>
        <div className='text-3xl font-serif text-gray-800 mb-4'>
          {richTextRender(sectionTwo?.sectionTwo?.text.json.content[0])}
        </div>
        <div className='text-lg text-gray-600 leading-relaxed'>
          {richTextRender(sectionTwo?.sectionTwo?.text.json.content[1])}
        </div>
      </div>
    </div>
  )
}
