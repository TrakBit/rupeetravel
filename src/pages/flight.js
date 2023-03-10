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
    Alert,
    AlertIcon,
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
        title: ` Try booking early, you can get prices as low as ₹6,000`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `~₹5,000 is tax on every ticket hence prices can't go lower than that`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `Extra ~₹2,000 for checked in luggage`,
        color: 'green.500',
    },
    {
        item: 4,
        icon: CheckCircleIcon,
        title: `If you plan to travel the entire country, try checking the cheapest current route eg: Hanoi, Ho Chi Minh, Da Nang.`,
        color: 'green.500',
    },
    {
        item: 5,
        icon: InfoIcon,
        title: `Food in plane is expensive, you can even carry some airport food in flight.`,
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'booking flight'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Vietjet <Tag colorScheme='teal'>Personally used</Tag></Heading>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button colorScheme='blue' onClick={() => window.open('https://www.vietjetair.com/en')}>
                                        Book Vietjet
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Tag colorScheme='orange'>Fellow passenger faced this</Tag>
                                <Alert status='error' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Please ensure no mistakes are made in filling personal details during booking or else you might have to pay ~5,000 for fixing info at airport.
                                </Alert>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
