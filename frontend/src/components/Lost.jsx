import {
  FormControl,
  Input,
  Textarea,
  Divider,
} from '@chakra-ui/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LostFound() {
  const [itemName, setItemName] = useState('')
  const [itemLocation, setItemLocation] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [itemDate, setItemDate] = useState('');
  const [contact, setContact] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    const itemData = {
      name: itemName,
      location: itemLocation,
      description: itemDescription,
      contact: Number(contact),
      date: itemDate
    }
     

    try {
      const response = await fetch('http://localhost:3000/lost/lostForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData)
      });

      const data = await response.json();
      console.log(data)
      setItemDate("");
      setItemDescription("");
      setItemLocation("");
      setItemName("");
      setContact('');
      alert("Your Lost query is Submitted")
    } 
    catch(err) {
      console.log("Error",err);
    }
  }


  return (
    <div 
      className='flex justify-center w-full items-center text-black h-screen'
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1626010448982-0fec79ed1979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        backgroundSize: 'cover',
      }}  
    >
      <div 
      className='flex h-full w-full'
        style={{
          backdropFilter: 'blur(3px)'
        }}
      >
        <div 
          className='flex justify-center items-center flex-col'
          style={{
            backdropFilter: 'blur(3px)'
          }}
        >
          <p className='text-8xl text-white m-10 mr-10 w-1/2 flex justify-center items-center lost-heading'>
            LOST & FOUND
          </p>
          <p className='w-1/2 text-white'>
          Have you lost something important? Or perhaps found an item and want to return it to its owner? You're in the right place! Please fill out the form below with the details of the lost or found item.
          </p>
        </div>
        <Divider orientation='vertical' className='h-full' />
        <div className='flex flex-col justify-center items-center p-10 w-1/2 mr-10'>
          <form 
            onSubmit={handleSubmit}
            className='w-full'
          >
            <FormControl
              isRequired
              className='flex justify-center items-center flex-col gap-3 bg-zinc-100 p-3 rounded'
            >
              <Input 
                variant='flushed'  
                placeholder='Item Name' 
                onChange={(e) => setItemName(e.target.value)}
                value={itemName}
                required
              />
              <Input 
                variant='flushed'  
                placeholder='Location'
                onChange={(e) => setItemLocation(e.target.value)}
                value={itemLocation} 
                required
              />
              <Input
                variant='flushed' 
                placeholder='Contact Details' 
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                required
              />
              <Textarea 
                variant='flushed' 
                placeholder='Description' 
                onChange={(e) => setItemDescription(e.target.value)}
                value={itemDescription}
                required
              />
              <Input 
                variant='flushed' 
                type='date'
                required
                onChange={(e) => setItemDate(e.target.value)}
                value={itemDate}
              />
              <button 
                className='mt-5 bg-zinc-400 py-1 rounded text-lg text-white hover:bg-zinc-500 transition ease-in-out duration-200 w-full'
                type='submit'
              >
                Submit Details
              </button>
              <Divider orientation='horizontal' className='mt-4'/>
              <Link
                className='mt-5 bg-zinc-400 flex justify-center item-center py-1 rounded text-lg text-white hover:bg-zinc-500 transition ease-in-out duration-200 w-full'
                to={'/lostlist'}
              >
                See Lost Items List
              </Link>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LostFound