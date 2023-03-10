import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Image,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `just search on fb as 'CITY_YOU_VISITING hotel'`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `You can message hotels and get your rooms booked`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `For premium experience stick to domestic 4 star (which are internationally 3 star hotels.)`,
        color: 'red.400',
    },
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'booking hotel'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/hotel.webp'}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Facebook search</Heading>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardBody>
                                <Tag colorScheme='teal'>Personally used</Tag>
                                <br/>
                                Incase you want to stay in the same city (Da Nang) and same hotel (Lavencos) where I stayed ????, you can contact below
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        onClick={() => window.open('https://www.facebook.com/lavencos.vn')}>
                                        Contact Lavencos Hotel
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
