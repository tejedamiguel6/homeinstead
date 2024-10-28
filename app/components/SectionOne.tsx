import Image from 'next/image'

import { homePageSection_one } from '../lib/graphql-api'
import { richTextRender } from '../utils/richTextRender'

export default async function SectionOne() {
  const data = await homePageSection_one()

  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center p-8 lg:p-10 bg-gray-50'>
      <div className='max-w-md space-y-4 lg:mr-8'>
        {data?.sectionOne?.headline ? (
          <h1 className='text-4xl lg:text-5xl font-extrabold text-purple-800 leading-tight'>
            {data.sectionOne.headline}
          </h1>
        ) : null}

        {data?.sectionOne?.body.json.content.map((node: any, index: number) =>
          richTextRender(node)
        )}
      </div>

      <div className='w-full lg:max-w-xs mt-6 lg:mt-0'>
        {data?.sectionOne?.image?.url ? (
          <Image
            width={200}
            height={200}
            src={data.sectionOne.image.url}
            alt='image'
            className='object-contain w-full h-auto'
          />
        ) : null}
      </div>
    </div>
  )
}
