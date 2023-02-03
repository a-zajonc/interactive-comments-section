import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";
import {
  CommentsContext,
  DeleteContext,
  ReplyContext,
  ReplyToUsernameContext,
  EditContext,
} from "./context";
function App() {
  const [comments, setComments] = React.useState([]);
  const [replyID, setReplyID] = React.useState(0);
  const [replyToUsername, setReplyToUsername] = React.useState("");
  const [deleteID, setDeleteID] = React.useState(0);
  const [editID, setEditID] = React.useState(0);
  React.useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((commentsData) => {
        setComments(commentsData);
      });
  }, []);
  return _jsx(
    Box,
    Object.assign(
      { display: "flex", justifyContent: "center", marginBlock: "80px" },
      {
        children: _jsx(
          CommentsContext.Provider,
          Object.assign(
            { value: { comments, setComments } },
            {
              children: _jsx(
                EditContext.Provider,
                Object.assign(
                  { value: { editID, setEditID } },
                  {
                    children: _jsx(
                      ReplyContext.Provider,
                      Object.assign(
                        { value: { replyID, setReplyID } },
                        {
                          children: _jsx(
                            DeleteContext.Provider,
                            Object.assign(
                              { value: { deleteID, setDeleteID } },
                              {
                                children: _jsx(
                                  ReplyToUsernameContext.Provider,
                                  Object.assign(
                                    {
                                      value: {
                                        replyToUsername,
                                        setReplyToUsername,
                                      },
                                    },
                                    { children: _jsx(CommentSection, {}) }
                                  )
                                ),
                              }
                            )
                          ),
                        }
                      )
                    ),
                  }
                )
              ),
            }
          )
        ),
      }
    )
  );
}
export default App;
