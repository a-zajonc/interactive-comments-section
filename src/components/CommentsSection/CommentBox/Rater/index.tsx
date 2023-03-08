import * as React from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type RaterProps = {
  score: number;
};

export function Rater({ score }: RaterProps) {
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
      flexDirection={{ base: "row", sm: "column" }}
      alignItems="center"
      justifyContent="space-evenly"
      h={{ base: "40px", sm: "130px" }}
      w={{ base: "130px", sm: "40px" }}
      marginRight={{ sm: "10px", md: "20px" }}
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
