'use client'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


export default function Header() {

  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
    <header className='w-auto md:container md:mx-auto'>
      <Carousel images={images} style={{ height: 500 }} hasThumbnails={false} hasTransition={true} transitionSpeed={1000} hasDotButtons="true" hasMediaButton="false" hasSizeButton="false" hasIndexBoard="false" hasCaptions="true" />
    </header>
  )
}
