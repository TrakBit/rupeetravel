import styles from "@/styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  Image,
  Alert,
  AlertIcon,
  SimpleGrid,
  Tag,
} from "@chakra-ui/react";
import Header from "@/component/header";
import ListView from "@/component/listview";
import Seo from "@/component/seo";

export default function Home({ features }) {
  return (
    <>
      <Seo
        title="Rupee Travel | credit card with zero international transaction charges"
        description="Best credit card for international travel. Apply IDFC credit card."
        canonical={
          "https://www.rupeetravel.com/credit-cards-travel-vietnam-zero-forex-markup-fee"
        }
      />
      <main className={styles.main}>
        <Header title={"Indian Credit Cards for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    IDFC First Wow credit card
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally using
                  </Tag>
                  <Image
                    src={"/static/images/credit-card.webp"}
                    alt="IDFC First Wow"
                    borderRadius="lg"
                    style={{
                      marginTop: "10px",
                      width: "310px",
                      height: "174px",
                    }}
                  />
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() =>
                    window.open(
                      "https://www.idfcfirstbank.com/credit-card/credit-card-against-fixed-deposits"
                    )
                  }
                >
                  IDFC First Wow
                </Button>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Tag colorScheme="teal">Personally used 😞</Tag>
                <Alert status="error" style={{ marginTop: "10px" }}>
                  <AlertIcon />
                  Please avoid Amex credit cards, since they are hardly accepted
                  anywhere in Vietnam.
                </Alert>
                <Image
                  src={"/static/images/american-express.webp"}
                  alt="Amex card"
                  borderRadius="lg"
                  style={{ marginTop: "10px", width: "310px", height: "312px" }}
                />
              </CardBody>
            </Card>
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const features = [
    {
      item: 1,
      title: "✅ Zero forex markup credit card",
      color: "green.500",
    },
    {
      item: 2,
      title: "✅ Zero Joining/Annual fee",
      color: "green.500",
    },
    {
      item: 3,
      title:
        "✅ Withdraw cash from ATM without interest till Payment date (48 days interest free cash)",
      color: "green.500",
    },
    {
      item: 4,
      title: "✅ VISA backed credit card hence higher acceptance in Vietnam",
      color: "green.500",
    },
    {
      item: 5,
      title: "❌ Secured credit card which needs an FD as collateral",
      color: "red.400",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
