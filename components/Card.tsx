import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CardProps } from "../interface/CardProps";

function Card(props: CardProps) {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [liked, setLiked] = useState(props.is_liked);
  useEffect(() => {
    const end_date = new Date(props.ends_in).getTime();

    setInterval(() => {
      const current_date = new Date().getTime();
      const difference = end_date - current_date;
      setCountDown({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);
  }, []);

  return (
    <Box w="270px" h="500px" bgColor="#112135" p="1em" borderRadius="0.5em">
      <Flex direction="column" h="100%" justifyContent="space-between">
        <Flex>
          <Text
            as="b"
            fontSize="xs"
            bgColor="#151a2e"
            color={!props.is_hot ? "#585973" : "white"}
            border={`2px solid ${!props.is_hot ? "#585973" : "#744123"}`}
            borderRadius="1em"
            paddingX="1em"
          >
            Hot Deal
          </Text>
          <Spacer />
          <Text
            as="b"
            fontSize="xs"
            bgColor="#151a2e"
            color="white"
            border={`2px solid ${!props.is_sale ? "#744123" : "#403d92"}`}
            borderRadius="1em"
            paddingX="1em"
          >
            {props.is_sale ? "SALE" : "AUCTION"}
          </Text>
        </Flex>

        <Box h="45%" overflow="hidden">
          <Image
            src={props.imageUrl}
            boxSize="100%"
            objectFit="scale-down"
            alt={props.imageAlt}
            bgColor={props.bgColor}
            borderRadius="0.5em"
          />
        </Box>

        <Flex gap="10px">
          <Box>
            <Text color="white" letterSpacing="1px">
              #{props.id}
            </Text>
            <Text fontSize="sm" color="#797d83">
              {props.title}
            </Text>
          </Box>
          <Spacer />
          <StarIcon
            color={liked ? "#ff0c80" : "#474761"}
            marginTop="4px"
            onClick={() => setLiked((prev) => !prev)}
          />
          <Text as="b" color="#797d83">
            {props.likes + (liked ? 1 : 0)}
          </Text>
        </Flex>

        <Flex>
          <Box
            w="40%"
            border="2px solid #1e284d"
            padding="0.5em"
            borderRadius="0.3em"
            position="relative"
          >
            {props.is_sale ? (
              <Text
                fontSize="xs"
                paddingX="0.4em"
                borderRadius="1em"
                top="0"
                right="0"
                mt="-1em"
                mr="0.3em"
                position="absolute"
                as="b"
                color="white"
                bgColor="#1bb033"
              >
                {props.discount_perc}% OFF
              </Text>
            ) : null}
            <Text
              fontSize="xs"
              as="b"
              color={!props.is_sale ? "#3cb822" : "#b83e40"}
            >
              {!props.is_sale ? "HIGHEST BID" : <del>${props.highest_bid}</del>}
            </Text>
            <br />
            {props.is_sale ? (
              <Text as="b" color="white">
                ${props.discount_price}
              </Text>
            ) : (
              <Text as="b" color="white">
                ${props.highest_bid}
              </Text>
            )}
          </Box>
          <Spacer />
          <Box
            w="55%"
            border="2px solid #2d2a2f"
            paddingTop="0.5em"
            borderRadius="0.3em"
            textAlign="center"
          >
            <Text as="b" fontSize="xs" color="#8fafd5">
              {!props.is_sale ? "AUCTION ENDS IN" : "FLASH SALE ENDS IN"}
            </Text>
            <br />
            <Text as="b" fontSize="sm" color="white">
              {`${countDown.days} : ${countDown.hours} : ${countDown.minutes} : ${countDown.seconds}`}
            </Text>
          </Box>
        </Flex>

        {!props.is_sale ? (
          <Button bgColor="#1575f6" color="white" _hover={{ color: "black" }}>
            BID NOW
          </Button>
        ) : (
          <Flex>
            <Button
              bgColor="transparent"
              color="white"
              border="1px solid white"
              fontSize="sm"
              w="47%"
            >
              ADD TO CART
            </Button>
            <Spacer />
            <Button
              bgColor="#1575f6"
              fontSize="sm"
              w="47%"
              color="white"
              _hover={{ color: "black" }}
            >
              BUY NOW
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default Card;
