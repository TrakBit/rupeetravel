import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `If you're a remote worker like me ensure your hotel has fast internet before booking them. 
        The Hotel in which I stayed in Da Nang (Lavencos) has 20 Mbps which suits my need.`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: ` Highlands Cafe (Starbucks of Vietnam) is a good place to work as well but can be noisy for meetings. `,
        color: 'green.500',
    },
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'work'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Arranging for remote work <Tag colorScheme='teal'>Personally experienced</Tag></Heading>
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
