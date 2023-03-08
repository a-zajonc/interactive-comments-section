import { Box, Img, Text } from "@chakra-ui/react";

type UserDataDisplayProps = {
  username: string;
  date: string;
  avatar: string;
};

export function UserDataDisplay({
  username,
  date,
  avatar,
}: UserDataDisplayProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      w={{ base: "100%", sm: "330px", md: "340px" }}
    >
      <Img
        src={require("../../../../../images/avatars/".concat(avatar))}
        alt="avatar"
        h="50px"
      ></Img>
      <Text color="black" fontWeight="500">
        {username}
      </Text>
      {username === "juliusomo" ? (
        <Box
          bgColor="#5457B6"
          color="white"
          fontSize="14px"
          fontWeight="500"
          paddingBlock="1px"
          paddingInline="8px"
        >
          you
        </Box>
      ) : null}
      <Text color="#67727E">{date}</Text>
    </Box>
  );
}
