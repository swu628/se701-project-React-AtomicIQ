import { useEffect } from "react";

export default function Levels() {
  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <div>
      <p>levels</p>
    </div>
  );
}
