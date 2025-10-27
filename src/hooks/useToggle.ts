import { useState } from "react";

/**
 * useToggle - custom hook to toggle between true/false.
 * @param initial - optional initial state (default: false)
 * @returns [state, toggle] - `state` is current boolean value, `toggle` is a function to invert it
 */
export const useToggle = (initial: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initial);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle];
};
