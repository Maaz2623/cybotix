import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetWinners = ({ eventId }: { eventId: string }) => {
  const query = useQuery({
    queryKey: ["winners"],
    queryFn: async () => {
      const response = await client.api.winners[":eventId"].$get({
        param: {
          eventId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch winners");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
