import { atom, useAtom } from "jotai";

const modalState = atom(false);

export const useCreateParticipantModal = () => {
  return useAtom(modalState);
};
