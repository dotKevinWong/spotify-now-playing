import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  const { data } = useSWR("/api/nowplaying", fetcher);

  return (
    <Box
      bg={mode("white", "gray.700")}
      px="6"
      py="4"
      shadow="base"
      rounded="lg"
    >
      <HStack>
        <Circle bg="green.500" color="white" rounded="full" size="10" mb="2">
          <Box size="32" as={FaSpotify} />
        </Circle>
        <Text fontWeight="bold" color={mode("gray.500", "gray.400")}>
          Spotify
        </Text>
      </HStack>

      <Flex
        justify="space-between"
        align="center"
        fontWeight="medium"
        fontSize="sm"
      >
        <HStack spacing="0" color={mode("gray.500", "gray.400")}>
          <Box boxSize="100px" mr="2">
            <Image src={data?.songUrl ? data.albumImageUrl : "/album.png"} />
          </Box>
          <VStack align="left">
            {data?.songUrl ? (
              <>
                <Heading as="h4" size="lg" fontWeight="light">
                  {data.title}
                </Heading>
                <Heading as="h4" size="md" fontWeight="extrabold">
                  {data.artist}
                </Heading>
                <Heading as="h4" size="md" fontWeight="bold">
                  {data.album}
                </Heading>
              </>
            ) : (
              <>
                <Heading as="h4" size="lg" fontWeight="bold">
                  Not Playing
                </Heading>
              </>
            )}
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}
