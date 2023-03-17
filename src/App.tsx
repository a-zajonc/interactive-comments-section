import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";
import { ReplyToUsernameContext } from "./hooks/useReplyToUsername";
import { EditContext } from "./hooks/useEdit";
import { ReplyContext } from "./hooks/useReply";
import { CommentsDataContext, Comment } from "./hooks/useCommentsData";

function App() {
  const [comments, setComments] = React.useState<Comment[]>();
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
      <CommentsDataContext.Provider value={{ comments, setComments }}>
        <EditContext.Provider value={{ editID, setEditID }}>
          <ReplyContext.Provider value={{ replyID, setReplyID }}>
            <ReplyToUsernameContext.Provider
              value={{ replyToUsername, setReplyToUsername }}
            >
              <CommentSection />
            </ReplyToUsernameContext.Provider>
          </ReplyContext.Provider>
        </EditContext.Provider>
      </CommentsDataContext.Provider>
    </Box>
  );
}

export default App;
