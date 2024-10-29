import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetForum = ({ forumId }: { forumId: string }) => {
  const query = useQuery({
    queryKey: ["forum", forumId],
    queryFn: async () => {
      const response = await client.api.forums[":forumId"].$get({
        param: {
          forumId,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch forum");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
