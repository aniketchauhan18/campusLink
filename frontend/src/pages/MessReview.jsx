import  { useState } from 'react'
import {
  Divider,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react"


function MessReview() {
  const [username, setUsername] = useState("");
  const [userRollNo, setRollNo] = useState("");
  const [description, setDescription] = useState("");
  const [hostel, setHostel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const reviewData = {
      name: username,
      rollNo: userRollNo,
      description: description,
      hostel: hostel
    }

    try {
      const response = await fetch('http://localhost:3000/mess/messReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      })
      const data = await response.json()
      console.log(data)
      setUsername("")
      setDescription("")
      setRollNo("")
      setHostel("")
      alert("Your review is submitted")
    } catch (err) {
      console.log("Error", err)
    }
  }

  const inputClasses = ""
  return (
    <div className='flex justify-center items-center text-zinc-700 h-screen'
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backdropFilter: 'blur(100px)'
      }}
    >
      <div 
        className='text-8xl font-bold mb-10 flex justify-center items-center w-1/2 text-white mr-2 group-title'
        
      >
        MESS REVIEW
      </div>
      <Divider orientation='vertical' height='400px' className='mr-10'/>
      <div className='flex justify-center items-center w-1/2 '>
        <form className='flex flex-col bg-gray-100 gap-3 p-4 rounded-md w-full mr-10'
          onSubmit={handleSubmit}
        >
          <Input 
            className={inputClasses}
            placeholder='Enter name'
            required
            variant='flushed'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            className={inputClasses}
            placeholder='Enter your Roll No.'
            required
            variant='flushed'
            value={userRollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          <Textarea 
            className={inputClasses}
            placeholder='Enter your review'
            required
            variant='flushed'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select 
            className={inputClasses}
            required
            variant='flushed'
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
          >
            <option value="">Select your hostel</option>
            <option value="python">Kailash Boys Hostel</option>
            <option value="javascript">Ambika Girls Hostel</option>
            {/* Add more options as needed */}
          </Select>
          <button 
            className='border border-white p-1 bg-zinc-700 rounded  hover:bg-zinc-500 focus:flushed-none focus:ring-2 focus:ring-zinc-100 focus:border-transparent transition duration-300 ease-in-out flex justify-center items-center text-white text-md rounded-md cursor-pointer'
            type='submit'
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessReview;