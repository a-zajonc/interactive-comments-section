import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgPlus from "../../../../images/svg/icon-plus.svg";
import imgMinus from "../../../../images/svg/icon-minus.svg";

export function Rater({ score }: { score: number }) {
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
      padding="10px"
      marginRight="20px"
    >
      <Img src={imgPlus} alt="plus"></Img>
      <Text color="#5457B6" fontWeight="700">
        {score}
      </Text>
      <Img src={imgMinus} alt="minus"></Img>
    </Box>
  );
}
