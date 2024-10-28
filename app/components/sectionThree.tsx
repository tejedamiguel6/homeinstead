import Image from 'next/image'
import { homePageSection_three } from '../lib/graphql-api'
import { richTextRender } from '../utils/richTextRender'

export default async function SectionThree() {
  const data = await homePageSection_three()

  return (
    <div className='py-16 px-8 bg-gradient-to-r text-center'>
      {data?.sectionThree?.heading && (
        <h2 className='text-3xl font-serif text-gray-800 mb-12'>
          {data.sectionThree.heading}
        </h2>
      )}

      <div className='grid w-full grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {data?.sectionThree?.imagesCollection?.items.map(
          (node: any, index: number) => (
            <div key={index} className='flex flex-col items-center'>
              <Image
                width={node.width}
                height={node.height}
                src={node.url}
                alt={node.title}
                className='object-contain w-20 h-20 mb-4'
              />
              <p className='text-lg text-gray-600'>{node.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}
