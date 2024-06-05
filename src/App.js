import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer/Footer';
export default function App() {
  return (
    <>
        <ChakraProvider>
          <Hero />
          <Footer />
        </ChakraProvider>

    </>
  )
}

