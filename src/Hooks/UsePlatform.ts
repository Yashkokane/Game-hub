import usePlatforms from "./UsePlatforms";

const UsePlatform = (id?: number) => {
  const { data: Platforms } = usePlatforms();
  return Platforms?.results.find((p) => p.id === id);
};

export default UsePlatform;
