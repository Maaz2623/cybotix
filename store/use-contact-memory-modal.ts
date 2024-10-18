import { atom, useAtom } from "jotai";

const modalState = atom(false);

export const useContactMemoryStore = () => {
  return useAtom(modalState);
};
