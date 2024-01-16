import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import BookingWidget from '../components/BookingWidget'
import PlaceGallery from '../components/PlaceGallery'
import AddressLink from '../components/AddressLink'


const SinglePage = () => {
  const [place, setPlace] = useState(null)
  const {id} = useParams()
  
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(response => {
      setPlace(response.data)
    })
  }, [id])
  
  if(!place) return ''

  return (
    <div className='mt-4 pt-6 bg-gray-100 -mx-8 px-8'>
      <h1 className='text-3xl'>{place.title}</h1>
      <AddressLink address={place.address} />
      <PlaceGallery place={place}/>

      {/*  check in and out */}
      <div className='mt-8 mb-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
        <div>
      {/* description */}
          <div className='my-4'>
            <h2 className='font-semibold text-2xl'>Description</h2>
            {place.description}
          </div>
          <div className='pt-4'>
            <span className='font-semibold'>Check in: </span>{place.checkIn} <br/>
            <span className='font-semibold'>Check out: </span>{place.checkOut} <br />
            <span className='font-semibold'>Max number of guests: </span>{place.maxGuests}
          </div>
          
        </div>
        <div>
          <BookingWidget place={place}/>
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className='font-semibold text-2xl'>Extra info</h2>
        </div>
        <div className='mb-4 mt-2 text-sm font-gray-700 leading-5'>{place.extraInfo}</div>
      </div>
    </div>
  )
}
// CHANGE LINKS BEFORE DEPLOYMENT
export default SinglePage