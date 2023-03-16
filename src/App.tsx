import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";
import { CommentsContext, ReplyContext, EditContext } from "./context";
import { ReplyToUsernameContext } from "./hooks/useReplyToUsername";

function App() {
  const [comments, setComments] = React.useState([]);
  const [replyID, setReplyID] = React.useState(0);
  const [replyToUsername, setReplyToUsername] = React.useState("");
  const [editID, setEditID] = React.useState(0);

  React.useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((commentsData) => {
        setComments(commentsData);
      });
  }, []);

  return (
    <Box display="flex" justifyContent="center" marginBlock="80px">
      <CommentsContext.Provider value={{ comments, setComments }}>
        <EditContext.Provider value={{ editID, setEditID }}>
          <ReplyContext.Provider value={{ replyID, setReplyID }}>
            <ReplyToUsernameContext.Provider
              value={{ replyToUsername, setReplyToUsername }}
            >
              <CommentSection />
            </ReplyToUsernameContext.Provider>
          </ReplyContext.Provider>
        </EditContext.Provider>
      </CommentsContext.Provider>
    </Box>
  );
}

export default App;
