import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetEvents = ({ forumId }: { forumId: string }) => {
  const query = useQuery({
    queryKey: ["event", forumId],
    queryFn: async () => {
      const response = await client.api.events[":forumId"].$get({
        param: {
          forumId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch event");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
