import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <h1>Oops...</h1>
        <Text>
          {isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
