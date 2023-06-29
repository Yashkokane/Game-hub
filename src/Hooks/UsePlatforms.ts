import Platforms from "../Data/Platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: Platforms, isLoading: false, error: null });

export default usePlatforms;
