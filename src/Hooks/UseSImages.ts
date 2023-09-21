import APIClient from "../Services/Api-Client";
import { useQuery } from "@tanstack/react-query";
import ScreenShots from "../Entities/ScreenShots";

const UseSImages = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default UseSImages;
