import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useGetForums = () => {
  const query = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const response = await client.api.forums.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch forums");
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
