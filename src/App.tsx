import * as React from "react";
import { Box } from "@chakra-ui/react";
import { CommentSection } from "./components/";

function App() {
  return (
    <Box display="flex" justifyContent="center" marginBlock="80px">
      <CommentSection />
    </Box>
  );
}

export default App;
