import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlaforms from "../Hooks/UsePlatforms";
import { Platform } from "../Hooks/UsePlatforms";
import UsePlatform from "../Hooks/UsePlatform";

interface Prop {
  onSelectPlatform: (platform: Platform) => void;
  SelectedPlatformId?: number;
}
const PlatformSelector = ({ onSelectPlatform, SelectedPlatformId }: Prop) => {
  const { data, error } = UsePlaforms();

  const selectPlatform = UsePlatform(SelectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
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
