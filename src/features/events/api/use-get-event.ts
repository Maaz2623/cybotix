import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetEvent = ({ eventId }: { eventId: string }) => {
  const query = useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      const response = await client.api.events[":eventId"]["details"].$get({
        param: {
          eventId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch event.");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
