import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";
import { CommentsContext } from "./context";

function App() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/comments")
      .then((res) => res.json())
      .then((commentsData) => {
        setComments(commentsData);
      });
  }, []);
  console.log(comments);

  return (
    <Box display="flex" justifyContent="center" marginBlock="80px">
      <CommentsContext.Provider value={{ comments, setComments }}>
        <CommentSection />
      </CommentsContext.Provider>
    </Box>
  );
}

export default App;
