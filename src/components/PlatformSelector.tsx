import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlaforms from "../Hooks/UsePlatforms";
import { Platform } from "../Hooks/useGames";

interface Prop {
  onSelectPlatform: (platform: Platform) => void;
  SelectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, SelectedPlatform }: Prop) => {
  const { data, error } = UsePlaforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {SelectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
