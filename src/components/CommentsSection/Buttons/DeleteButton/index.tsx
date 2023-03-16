import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgDelete from "../../../../images/svg/icon-delete.svg";

export function DeleteButton() {
  return (
    <Box role="button" display="flex" flexDirection="row" alignItems="center">
      <Img src={imgDelete} alt="delete" marginRight="10px" />
      <Text color="#ED6468" fontWeight="500">
        Delete
      </Text>
    </Box>
  );
}
