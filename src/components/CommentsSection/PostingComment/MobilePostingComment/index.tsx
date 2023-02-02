import { Box, Img, Textarea, Button, Text } from "@chakra-ui/react";

export function MobilePostingComment({
  avatar,
  lengthError,
  ref,
  replyToUsername,
  defaultValue,
  replyMode,
  setContent,
}: {
  avatar: string;
  lengthError: boolean;
  ref: any;
  replyToUsername: string;
  defaultValue: any;
  replyMode: boolean;
  setContent: any;
}) {
  return (
    <Box
      bgColor="white"
      rounded="10px"
      padding="20px"
      w="100%"
      marginLeft="0px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      marginBottom="20px"
    >
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
        ref={ref}
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
      <Box
        display="flex"
        flexDirection="row"
        w="100%"
        justifyContent="space-between"
        marginTop="10px"
      >
        <Img src={avatar} alt="avatar" w="40px" />
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
    </Box>
  );
}
