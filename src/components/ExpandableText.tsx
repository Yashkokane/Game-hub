import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setexpanded] = useState(false);
  const limit = 400;
  if (!children) return null;
  if (children.length <= 400) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>{summary}</Text>
      <Button
        size="sm"
        fontWeight="bold"
        colorScheme="yellow"
        marginTop={3}
        onClick={() => setexpanded(!expanded)}>
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExpandableText;
