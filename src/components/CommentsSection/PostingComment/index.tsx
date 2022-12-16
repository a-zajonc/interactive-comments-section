import * as React from "react";
import { Box, Img, Button, Textarea } from "@chakra-ui/react";
import avatar from "../../../images/avatars/image-juliusomo.png";

export function PostingComment() {
  return (
    <Box
      bgColor="white"
      rounded="10px"
      padding="20px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Img src={avatar} alt="avatar" />
      <Textarea
        placeholder="Add a comment..."
        variant="outline"
        w="100%"
        minH="100px"
        marginLeft="10px"
        marginRight="10px"
        resize="none"
        rounded="10px"
        padding="10px"
        paddingLeft="20px"
        focusBorderColor="#324152"
        borderWidth="1px"
        color="#324152"
      />
      <Button
        rounded="10px"
        bgColor="#5457B6"
        textTransform="uppercase"
        color="white"
        fontWeight="700"
        padding="10px"
        w="20%"
        _hover={{ opacity: "0.5" }}
      >
        Send
      </Button>
    </Box>
  );
}
