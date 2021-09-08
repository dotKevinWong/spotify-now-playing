import {
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Link,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
      <HStack mb="2">
        <Circle bg="green.500" color="white" rounded="full" size="8">
          <Box size="24" as={FaSpotify} />
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
                <Link href={data.songUrl} isExternal>
                  <Heading as="h4" size="lg" fontWeight="light">
                    {data.title} <ExternalLinkIcon h={6} />
                  </Heading>
                </Link>
                <Heading as="h4" size="md" fontWeight="extrabold">
                  {data.artist}
                </Heading>
                <Link href={data.albumUrl} isExternal>
                  <Heading as="h4" size="md" fontWeight="bold">
                    {data.album} <ExternalLinkIcon h={4} />
                  </Heading>
                </Link>
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
