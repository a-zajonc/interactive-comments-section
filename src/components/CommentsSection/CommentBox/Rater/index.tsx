import * as React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export function Rater({ score }: { score: number; username: string }) {
  const [newScore, setNewScore] = React.useState(score);

  const initialScore = score;

  function isDisabled(type: string) {
    if (initialScore === newScore) {
      return false;
    }
    if (type === "minus") {
      if (newScore === initialScore - 1) {
        return true;
      }
    }
    if (type === "plus") {
      if (newScore === initialScore + 1) {
        return true;
      }
    }
  }

  return (
    <Box
      bgColor="#EAECF1"
      rounded="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      h="130px"
      w="40px"
      marginRight="20px"
    >
      <IconButton
        bgColor="#EAECF1"
        _hover={{ bgColor: "#EAECF1", color: "#5457B6" }}
        _focus={{ bgColor: "#EAECF1" }}
        padding="10px"
        aria-label="Rate with plus"
        color="#C5C6EF"
        icon={<AddIcon />}
        onClick={() => {
          setNewScore(newScore + 1);
        }}
        isDisabled={isDisabled("plus")}
      ></IconButton>
      <Text color="#5457B6" fontWeight="700" padding="10px">
        {newScore}
      </Text>
      <IconButton
        bgColor="#EAECF1"
        _hover={{ bgColor: "#EAECF1", color: "#5457B6" }}
        _focus={{ bgColor: "#EAECF1" }}
        padding="10px"
        aria-label="Rate with plus"
        color="#C5C6EF"
        icon={<MinusIcon />}
        onClick={() => {
          setNewScore(newScore - 1);
        }}
        isDisabled={isDisabled("minus")}
      ></IconButton>
    </Box>
  );
}
