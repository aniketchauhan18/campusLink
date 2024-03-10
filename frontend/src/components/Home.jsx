// import collegeImage from '../assests/college.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Divider} from '@chakra-ui/react'
import logoWhite from '/electrothon.png'
// import { MdOutlineConnectWithoutContact } from "react-icons/md";

function Home() {

  const { user } = useAuth0();

  const buttonClasses = "bg-zinc-300  text-gray-900 py-1 px-3 rounded"
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className=" flex flex-col justify-center items-center text-6xl w-full h-screen text-black bg-zinc-300"
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
      <Divider orientation="horizontal"/>
      <div className="flex w-full">
        <div className="text-8xl font-bold w-full flex justify-center items-center">
          Chat with Bot
        </div>
        <iframe 
        className="w-full"
          src="/bot.html" 
          style={{ width: '100%', height: '500px' }} 
          title="Botpress Webchat"
        />
      </div>
      <div className="text-black flex justify-between pl-10 pr-10 pb-20 bg-zinc-200 pt-10 gap-2 text-white ">
      <div
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1626010448982-0fec79ed1979?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          backgroundSize: 'cover',
        }}
        >
          <div 
            className="flex flex-col p-10 card-info h-60"
            style={{
              backdropFilter: 'blur(3px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold ">
              Lost and Found
            </div>
            <div
            >
              Post details of your lost or found items here. Share information with the community to help reunite lost items with their owners or discover something new!
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/lostquery" : {}}
              >
                Click
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
            className="flex flex-col p-10 h-60 card-info"
            style={{
              backdropFilter: 'blur(1px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold ">
              Dynamic Chat Rooms
            </div>
            <div>
              Dive into our lively Chat Rooms for academic queries and campus updates. Engage in discussions, form study groups, or simply connect with peers—all just a click away!
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
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            backgroundSize: 'cover',
          }}
        >
          <div 
            className="flex flex-col p-10 card-info"
            style={{
              backdropFilter: 'blur(2px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold">
              Streamline College Events
            </div>
            <div>
            Stay organized with our user-friendly event scheduler. Manage lectures, club meetings, and more with ease. Receive reminders, explore event details, and stay on top of important moments!
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/scheduler" : {}}
              >
                Click
              </Link>
            </div>
          </div>
        </div>
        <div
        className="w-full"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            backgroundSize: 'cover',
          }}
        >
          <div 
            className="flex flex-col p-10 card-info"
            style={{
              backdropFilter: 'blur(2px)'
            }}
          >
            <div className="flex justify-start  mb-2 text-xl font-bold">
              Mess Reviews
            </div>
            <div>
              Effortlessly submit your mess reviews with our intuitive form. Never miss a dining moment again! 
            </div>
            <div className="flex justify-end mr-1 mt-2">
              <Link 
                className={buttonClasses}
                to={user ? "/messReview" : {}}
              >
                Click
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

