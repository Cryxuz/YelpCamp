import { useEffect, useState } from 'react'
import AccountNavigation from './AccountNavigation'
import axios from 'axios'
import PlaceImg from '../PlaceImg'
import {differenceInCalendarDays, format} from 'date-fns'

const BookingsPage = () => {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    axios.get('bookings', { withCredentials: true}).then(response => {
      setBookings(response.data)
    })
  }, [])

  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings.length > 0 && bookings.map((booking, index) => (
          <div className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden' key={index}>
            <div className='w-48'>
             <PlaceImg place={booking.place} />
            </div>
            <div className='py-3 grow '>
              <h2 className='font-semibold text-xl'>{booking.place.title}</h2>
              <div className='flex gap-2 items-center border-t border-gray-300 pr-3 mt-2 py-2'>
                <div className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  {format(new Date (booking.checkIn), 'yyyy-MM-dd')} 
                </div>
                
                &rarr; 
                
                <div className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  {format(new Date (booking.checkOut), 'yyyy-MM-dd')}
                </div>
              </div>
              <div className='text-xl'>
                {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights
                | Total price: ${booking.price}
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookingsPage