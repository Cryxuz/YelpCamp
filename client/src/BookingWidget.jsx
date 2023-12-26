import { useState } from "react"


const BookingWidget = (place) => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  return (
    <div className='bg-white shadow p-4 rounded-2xl'>
      <div className='text-2xl text-center my-2'>
        Price: ${place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className='px-3 py-4'>
            <label>Check in:</label>
            <input 
              type="date" 
              value={checkIn} 
              onChange={evt => setCheckIn(evt.target.value)} />
          </div>
          <div className='px-3 py-4 border-l'>
            <label>Check out:</label>
            <input 
              type="date" 
              value={checkOut} 
              onChange={evt => setCheckOut(evt.target.value)}/>
          </div>
        </div>
        <div className='px-3 py-4 border-t'>
            <label>Number of guests:</label>
            <input 
              type="number" 
              value={numberOfGuests} 
              onChange={evt => setNumberOfGuests(evt.target.value)}/>
        </div>
      </div>
      <button className="primary mt-4">Book this place</button>
    </div>
  )
}

export default BookingWidget