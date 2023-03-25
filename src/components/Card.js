import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      w="lg"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
    >
      <Image src={imageSrc} alt={title} />
      <VStack align="start" p={4} w="100%">
        <Heading as="h3" size="sm" mb={2} fontWeight="bold" color="black">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          {description}
        </Text>
        <HStack>
          <Text fontSize="xs" color="black">
            See More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
      <VStack
        bg="gray.100"
        py={2}
        px={4}
        w="100%"
        position="absolute"
        bottom={0}
        left={0}
      >
        <Text fontSize="sm" fontWeight="bold" color="gray.500">
          See More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="gray" />
      </VStack>
    </VStack>
  );
};

export default Card;
