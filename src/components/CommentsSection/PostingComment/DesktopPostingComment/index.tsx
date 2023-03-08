import { Box, Img, Textarea, Button, Text } from "@chakra-ui/react";

type DesktopPostingCommentProps = {
  avatar: string;
  lengthError: boolean;
  replyToUsername: string;
  defaultValue: any;
  replyMode: boolean;
  setContent: any;
};

export function DesktopPostingComment({
  avatar,
  lengthError,
  replyToUsername,
  defaultValue,
  replyMode,
  setContent,
}: DesktopPostingCommentProps) {
  return (
    <Box
      bgColor="white"
      rounded="10px"
      padding="20px"
      w="100%"
      marginLeft="0px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-start"
      marginBottom="20px"
    >
      <Img src={avatar} alt="avatar" />
      <Box display="flex" flexDir="column" w="100%" paddingInline="10px">
        <Textarea
          placeholder="Add a comment..."
          variant="outline"
          w="100%"
          minH="100px"
          resize="none"
          rounded="10px"
          padding="10px"
          paddingLeft="20px"
          focusBorderColor="darkBlue"
          isInvalid={lengthError}
          onChange={(event) =>
            setContent(() =>
              event.target.value.replace(`@${replyToUsername}, `, "")
            )
          }
          defaultValue={defaultValue}
        />
        {lengthError === true ? (
          <Text color="#ED6468">
            Comments must be at least 5 characters long.
          </Text>
        ) : null}
      </Box>
      <Button
        rounded="10px"
        bgColor="#5457B6"
        textTransform="uppercase"
        color="white"
        fontWeight="700"
        w="100px"
        _hover={{ opacity: "0.5" }}
        type="submit"
      >
        {replyMode === true ? "Reply" : "Send"}
      </Button>
    </Box>
  );
}
