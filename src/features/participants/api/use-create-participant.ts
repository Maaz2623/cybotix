import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api.participants.create)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.participants.create)["$post"]
>;

export const useCreateParticipant = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const response = await client.api.participants.create.$post({
        form,
      });
      if (!response.ok) {
        throw new Error("Failed! Something went wrong");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Participated successfully.");
      queryClient.invalidateQueries({
        queryKey: ["participants"],
      });
    },
    onError: () => {
      toast.error("Failed to participate.");
    },
  });

  return mutate;
};
