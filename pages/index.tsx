import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import { data } from "../data/cards";
import { CardProps } from "../interface/CardProps";
import styles from "../styles/Home.module.css";

export default function Home(props: CardsProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        backgroundColor="#1a258d9e"
        m="auto"
        maxW="8xl"
        minH="100vh"
        flexWrap="wrap"
        gap="1em"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {props.cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </Flex>
    </div>
  );
}

export async function getStaticProps() {
  const cards = data;
  return {
    props: {
      cards,
    },
  };
}

interface CardsProps {
  cards: CardProps[];
}
