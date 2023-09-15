import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import UsePlatform from "../Hooks/UsePlatform";
import UsePlaforms from "../Hooks/UsePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = UsePlaforms();
  const SelectedPlatformId = useGameQueryStore((s) => s.gameQuery.PlatformId);
  const selectPlatform = UsePlatform(SelectedPlatformId);

  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
