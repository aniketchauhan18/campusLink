import {
  Divider
} from '@chakra-ui/react'

function Footer() {
  return (
    <div>
      <Divider orientation='horizontal'/>
      <footer className="text-black rounded-md flex justify-center items-center p-4">
        <p>&copy; 2024 Binary Burst.</p>
      </footer>
    </div>
  )
}

export default Footer