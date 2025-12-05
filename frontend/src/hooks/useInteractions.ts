import { useState, useEffect } from "react";
import { AppService } from "../services/appService"; 

export const useInteractions = () => {
  const [total, setTotal] = useState(AppService.getTotalInteractions());

  useEffect(() => {
    AppService.subscribeInteractions(setTotal);
  }, []);

  const addInteraction = () => {
    AppService.incrementInteractions();
  };

  return { totalInteractions: total, addInteraction };
};
