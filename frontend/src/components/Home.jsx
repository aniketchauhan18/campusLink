// import collegeImage from '../assests/college.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Divider} from '@chakra-ui/react'
import logoWhite from '../../public/electrothon.png'
// import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Home() {

  const { user } = useAuth0();

  const buttonClasses = "bg-zinc-300  text-gray-900 py-1 px-3 rounded"
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="font-lato flex flex-col justify-center items-center text-6xl w-full h-screen text-black bg-zinc-300"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://plus.unsplash.com/premium_photo-1661488246595-7f21bf98b7cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover'
      }}>
        <div
          className="w-full h-full flex justify-center items-center"
          style={{
            backdropFilter: 'blur(5px)'
          }}
        >
          <div 
            className="flex justify-between gap-10 items-center rounded-sm text-white"
          >
            <div className="mb-4 font-bold flex flex-col justify-center items-center">
              <div className="flex flex-col p-2">
                <div
                  className="flex justify-center items-center"
                >
                  <p className="flex reveal-animation justify-center items-center text-9xl text-gray-200">
                    CAMPUSLINK
                  </p>
                  <img 
                    src={logoWhite}
                    alt='logo'
                    className='h-36'
                  />
                </div>
                <div className="text-4xl flex justify-center items-center mb-8  p-2">
                  Connect, Collaborate & Create
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Divider orientation='horizontal' />
      <div className="flex flex-col justify-center items-center text-6xl text-black font-bold mb-20 mt-10">
        Explore Campus Connections
      </div>
      <div className="text-black flex justify-between pl-10 pr-10 pb-20 bg-zinc-200 pt-10 gap-2 text-white">
      <div
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1626010448982-0fec79ed1979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          backgroundSize: 'cover',
        }}
        >
          <div 
            className="flex flex-col p-10  h-60"
            style={{
              backdropFilter: 'blur(3px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold ">
              Lost and Found Rooms
            </div>
            <div
            >
              Misplaced something important? No worries! Navigate through our Lost and Found Rooms, where fellow students and staff post discoveries and search requests. Find what you've lost or lend a helping hand—it's all about community support.
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/lostquery" : {}}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/230554/pexels-photo-230554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            backgroundSize: 'cover',
          }}
        >
          <div 
            className="flex flex-col p-10  h-60"
            style={{
              backdropFilter: 'blur(1px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold ">
              Dynamic Chat Rooms
            </div>
            <div>
              From academic queries to the latest campus buzz, our vibrant Chat Rooms are buzzing with conversations. Join in discussions, create study groups, or simply hang out with peers, all within a few clicks.
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/groups" : {}}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            backgroundSize: 'cover',
          }}
        >
          <div 
            className="flex flex-col p-10"
            style={{
              backdropFilter: 'blur(2px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold">
              Streamline College Events
            </div>
            <div>
              Stay in the loop with our intuitive event scheduler. From lectures to club meetings, manage your calendar effortlessly. Get reminders, explore event details, and never miss an important moment.
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/scheduler" : {}}
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider orientation="horizontal"/>
      <footer className="text-black rounded-md flex justify-center items-center p-4">
        <p>&copy; 2024 Binary Burst. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home;

