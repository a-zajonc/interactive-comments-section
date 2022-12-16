import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgPlus from "../../../../images/svg/icon-plus.svg";
import imgMinus from "../../../../images/svg/icon-minus.svg";

export function Rater() {
  return (
    <Box
      bgColor="#EAECF1"
      rounded="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      h="90%"
      w="8%"
      padding="10px"
    >
      <Img src={imgPlus} alt="plus"></Img>
      <Text color="#5457B6" fontWeight="700">
        12
      </Text>
      <Img src={imgMinus} alt="minus"></Img>
    </Box>
  );
}
