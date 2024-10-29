import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useGetMembers = ({ forumId }: { forumId: string }) => {
  const query = useQuery({
    queryKey: ["members", forumId],
    queryFn: async () => {
      const response = await client.api.members[":forumId"].$get({
        param: {
          forumId,
        },
      });

      if (!response.ok) {
        throw new Error("Falied to fetch members");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
