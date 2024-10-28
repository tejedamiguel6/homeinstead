import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/sectionThree'
import styles from './styles/videoClip.module.css'
import type { Metadata } from 'next'

// ideally we would fetch this from a CMS
// and have this dynamic with each page
export const metadata: Metadata = {
  title: 'Home page',
  description:
    'Homestead is a home care service that provides safe and consistent care for your loved one as they age, delivered at home with both comfort and transparency.',
}

export default async function Home() {
  return (
    <>
      <div>
        <div className='flex flex-row-reverse px-20 my-6 pt-4'>
          <p>Find your homestead Location</p>
        </div>
        <nav>
          <ul className='flex justify-evenly items-center h-full border p-8'>
            <li className='px-4'>Home</li>
            <li className='px-4'>About</li>
            <li className='px-4'>Services</li>
            <li className='px-4'>Contact</li>
          </ul>
        </nav>
      </div>

      <div className='h-90 flex flex-col items-center justify-center p-4'>
        {/* Main Hero Section */}
        <div className='flex flex-col md:flex-row justify-between w-full max-w-screen-lg mx-auto'>
          {/* Left Side: Video */}
          <div className='w-full md:w-1/2 relative mb-8 md:mb-0'>
            <div className='relative overflow-hidden rounded-lg'>
              <video
                autoPlay
                muted
                loop
                crossOrigin='anonymous'
                poster='/videos/homestead-example.mp4'
                style={{
                  clipPath:
                    'polygon(0 0, 100% 0, 100% 80%, 75% 100%, 25% 100%, 0 80%)',
                }}
                className={`w-full h-auto object-cover ${styles.waveClip}`}
                aria-label='Home Instead in-home caregiver providing care to an older woman in her home'
              >
                <source src='/videos/homestead-example.mp4' />
              </video>
            </div>
          </div>

          {/* Right Side: Text and CTA */}
          <div className='w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center md:items-start text-center md:text-left'>
            <h1 className='text-3xl lg:text-4xl font-semibold text-teal-800 mb-4'>
              The care they <span className='font-bold italic'>need</span>. The
              home they <span className='font-bold italic'>love</span>.
            </h1>
            <p className='text-lg lg:text-xl text-gray-700 mb-8'>
              Home Instead provides safe and consistent care for your loved one
              as they age, delivered at home with both comfort and transparency.
            </p>

            {/* Tabs for Find Care / Find Jobs */}
            <div className='flex justify-center md:justify-start w-full max-w-md mb-4'>
              <button className='px-4 py-2 bg-teal-600 text-white rounded-l-md w-1/2'>
                Find Care
              </button>
              <button className='px-4 py-2 bg-gray-300 text-teal-800 rounded-r-md w-1/2'>
                Find Jobs
              </button>
            </div>

            {/* Location Search Section */}
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start w-full max-w-md space-y-4 md:space-y-0 md:space-x-2 mb-4'>
              <input
                type='text'
                placeholder='Postal Code or City & State'
                className='p-2 w-full md:w-auto border border-gray-300 rounded-md md:rounded-r-none'
              />
              <button className='px-4 py-2 w-full md:w-auto bg-red-500 text-white rounded-md md:rounded-l-none'>
                Find a local office
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comfort. Security. Connection. Section */}
      <div className='flex items-center justify-center bg-gray-100 py-20 px-4'>
        <div className='flex flex-col items-center text-center max-w-2xl'>
          <h1 className='text-3xl md:text-4xl font-bold text-purple-800 mb-4'>
            Comfort. Security. Connection.
          </h1>
          <p className='text-lg md:text-xl text-gray-700'>
            We all need these as we age, and that's where Home Instead can help.
            Our high-quality, trained Care Professionals offer the guidance and
            support you deserve, all in the comfort of home.
          </p>
        </div>
      </div>

      <div className='flex justify-center p-10'>
        <SectionOne />
      </div>

      <div>
        <SectionTwo />
      </div>

      <div className='flex justify-center'>
        <SectionThree />
      </div>
    </>
  )
}
