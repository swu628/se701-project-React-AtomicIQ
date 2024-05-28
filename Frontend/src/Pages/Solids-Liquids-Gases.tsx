import WaterStateSimulator from "~/components/WaterStateSimulator";
import { useEffect } from "react";

export default function SolidsLiquidsGases() {
    useEffect(() => {
      document.body.classList.add("backgroundImage");
  
      return () => {
        document.body.classList.remove("backgroundImage");
      };
    }, []);
  
    return (<WaterStateSimulator/>)
}
