import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';

const Header = ({ title }) => {
    return (
        <>
            <Link href="/">
                <Heading as='h3' size='2xl'>Rupee Travel</Heading>
            </Link>
            <Text
                as='h1'
                fontSize='xl'
                style={{
                    marginTop: '20px',
                    fontWeight: 600,
                }}>
                {title}
            </Text>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link href="/">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </>
    )
}

export default Header;
