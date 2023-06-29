import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwtich from "./ColorModeSwtich";
import SearchInput from "./SearchInput";

interface Prop {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Prop) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwtich />
    </HStack>
  );
};

export default Navbar;
