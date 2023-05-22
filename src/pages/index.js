import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  StackDivider,
  Box,
  Stack,
  SimpleGrid,
  Tag,
  Wrap,
  WrapItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import Seo from "@/component/seo";

export default function Home({ beforeArrivals, arrivals, beforeDeparture }) {
  return (
    <>
      <Seo canonical={"https://www.rupeetravel.com"} />
      <main className={styles.main}>
        <Text fontSize="5xl" as="b">
          Rupee Travel
        </Text>
        <Heading as="h1" size="xl" style={{ marginTop: "20px" }}>
          Budget travel checklist for Indians travelling Vietnam 🇻🇳
        </Heading>
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="330px" spacing="40px">
            <CheckListItemCard
              title={"Before you arrive 🇮🇳"}
              list={beforeArrivals}
            />
            <CheckListItemCard title={"Arrived 🇻🇳"} list={arrivals} />
            <CheckListItemCard
              title={"Before you depart 🇻🇳"}
              list={beforeDeparture}
            />
          </SimpleGrid>
          <Social />
        </div>
      </main>
    </>
  );
}

const CheckListItemCard = ({ title, list }) => {
  return (
    <Card style={{ width: "343px", marginTop: "10px" }}>
      <CardHeader>
        <Text fontSize="2xl" as="b">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {list.map((arrivals) => (
            <CheckListItem key={arrivals.key} task={arrivals} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

const CheckListItem = ({ task }) => {
  return (
    <Box>
      <Link href={task.link}>
        <Text fontSize="xl" as="b">
          {task.heading}&nbsp;
          <Tag style={{ marginTop: "4px" }} colorScheme={task.tagColor}>
            {task.tagText}
          </Tag>
        </Text>
        <Text style={{ fontWeight: 500 }} as="h2" pt="2" fontSize="sm">
          {task.subHeading}
        </Text>
      </Link>
    </Box>
  );
};

const Social = () => {
  return (
    <Wrap style={{ marginTop: "20px" }}>
      <WrapItem>
        <Image
          height={48}
          width={48}
          style={{ borderRadius: "24px" }}
          alt="Harsh Vardhan"
          src={"/images/harsh-vardhan.webp"}
        />
      </WrapItem>
      <WrapItem>
        <Text style={{ marginTop: "10px" }} as="b" fontSize="md">
          Follow me for tips
        </Text>
      </WrapItem>
      <WrapItem>
        <Button
          style={{ marginTop: "4px" }}
          colorScheme="twitter"
          leftIcon={<FaTwitter />}
          onClick={() => window.open("https://twitter.com/harsh_vardhhan")}
        >
          Twitter
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export async function getStaticProps() {
  const beforeArrivals = [
    {
      key: 1,
      heading: `Debit Card`,
      subHeading: `Zero forex markup fee debit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/debit-cards-travel-vietnam-zero-forex-markup-fee`,
    },
    {
      key: 2,
      heading: `Credit Card`,
      subHeading: `Zero forex markup fee credit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/credit-cards-travel-vietnam-zero-forex-markup-fee`,
    },
    {
      key: 3,
      heading: `Foreign Currency Notes`,
      subHeading: `Buy foreign currency notes online`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/buy-foreign-currency-notes-online`,
    },
    {
      key: 4,
      heading: `E-Visa`,
      subHeading: `Apply online E-Visa for Vietnam`,
      tagText: `Mandatory`,
      tagColor: `teal`,
      link: `/e-visa-vietnam-indians`,
    },
    {
      key: 5,
      heading: `Flight Booking`,
      subHeading: `Cheapest flights from India to Vietnam`,
      tagText: `Mandatory`,
      tagColor: `teal`,
      link: `/flight-booking-vietnam`,
    },
    {
      key: 6,
      heading: `Travel insurance`,
      subHeading: `Best travel insurance for Indians`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/travel-insurance-india-vietnam`,
    },
    {
      key: 7,
      heading: `Luggage`,
      subHeading: `Quick travel hack for luggage`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/travel-luggage-bag`,
    },
    {
      key: 8,
      heading: `Hotel Booking`,
      subHeading: `Book Vietnam hotel online`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/hotel-booking-vietnam`,
    },
    {
      key: 9,
      heading: `eSim`,
      subHeading: `Get Vietnam eSim for single sim phone`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/esim-vietnam`,
    },
  ];

  const arrivals = [
    {
      key: 1,
      heading: `Food & Taxi`,
      subHeading: `Download the Zomato + Uber of Vietnam`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/food-delivery-taxi-vietnam`,
    },
    {
      key: 2,
      heading: `Local mobile SIM card`,
      subHeading: `Get local Vietnam SIM card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/local-sim-card-vietnam`,
    },
    {
      key: 3,
      heading: `Place to work`,
      subHeading: `Best place for remote work in Vietnam`,
      tagText: `Remote work`,
      tagColor: `red`,
      link: `/remote-work-vietnam`,
    },
    {
      key: 4,
      heading: `ATM cash withdrawal`,
      subHeading: `zero forex markup charges ATM`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/atm-vietnam-zero-forex-markup`,
    },
  ];

  const beforeDeparture = [
    {
      key: 1,
      heading: ` VND for next visit`,
      subHeading: `Withdraw Vietnam currency from ATM `,
      tagText: `Frequent visitors`,
      tagColor: `blue`,
      link: `/withdraw-vietnam-currency-atm`,
    },
  ];

  return {
    props: {
      beforeArrivals,
      arrivals,
      beforeDeparture,
    },
  };
}
