import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const configAtom = atomWithStorage<"default" | "anime">(
  "site-theme",
  "default"
);

export function useTheme() {
  return useAtom(configAtom);
}
