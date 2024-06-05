import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Heading, Text} from '@chakra-ui/react'
import {ChatIcon, BiChat, BiShare} from '@chakra-ui/icons';
const Footer = () => {
    return(
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-1/441326703_8236938563002269_5237018386107564332_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEH26hthJEq9WLEcTJ2KG0FrGEnNKgcCn2sYSc0qBwKfZpXrMhqHPGyomtidl4pr2noR7u9dbCTxhmCDUaDDZBC&_nc_ohc=x0iahaXm4YcQ7kNvgF6Sp9G&_nc_ht=scontent.fceb1-4.fna&oh=00_AYBWvqA7SO-eaY_2M33BXbpL_9es1B9KXTY9WDIGEfJtjw&oe=66662BCB'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The Perfect Clovernor</Heading>

      <Text py='2'>
        My Baby is the perfect clovernor
      </Text>
    </CardBody>

    <CardFooter>
    <Button flex='1' variant='ghost'>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<ChatIcon />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost'>
      Share
    </Button>
    </CardFooter>
  </Stack>
</Card>
    )
}
export default Footer;