import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import { Rater } from "./Rater";
import avatar from "../../../images/avatars/image-amyrobson.png";
import imgReply from "../../../images/svg/icon-reply.svg";

export function CommentBox() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      bgColor="white"
      rounded="10px"
      w="650px"
      h="200px"
      padding="20px"
    >
      <Rater />
      <Box display="flex" flexDirection="column" marginLeft="10px">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          w="100%"
          marginBottom="15px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w="50%"
          >
            <Img src={avatar} alt="avatar" h="50px"></Img>
            <Text color="black" fontWeight="500">
              amyrobson
            </Text>
            <Text color="#67727E">1 month ago</Text>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Img src={imgReply} alt="reply" marginRight="10px" />
            <Text color="#5457B6" fontWeight="700">
              Reply
            </Text>
          </Box>
        </Box>
        <Text color="#67727E">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </Text>
      </Box>
    </Box>
  );
}
