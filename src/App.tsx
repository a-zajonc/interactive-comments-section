import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";
import {
  CommentsContext,
  ReplyContext,
  ReplyToUsernameContext,
} from "./context";

function App() {
  const [comments, setComments] = React.useState([]);
  const [replyID, setReplyID] = React.useState(0);
  const [replyToUsername, setReplyToUsername] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/api/comments")
      .then((res) => res.json())
      .then((commentsData) => {
        setComments(commentsData);
      });
  }, []);

  return (
    <Box display="flex" justifyContent="center" marginBlock="80px">
      <CommentsContext.Provider value={{ comments, setComments }}>
        <ReplyContext.Provider value={{ replyID, setReplyID }}>
          <ReplyToUsernameContext.Provider
            value={{ replyToUsername, setReplyToUsername }}
          >
            <CommentSection />
          </ReplyToUsernameContext.Provider>
        </ReplyContext.Provider>
      </CommentsContext.Provider>
    </Box>
  );
}

export default App;
