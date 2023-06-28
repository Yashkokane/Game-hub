import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwtich from "./ColorModeSwtich";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text fontSize="35px">Game Store</Text>
      <ColorModeSwtich />
    </HStack>
  );
};

export default Navbar;
