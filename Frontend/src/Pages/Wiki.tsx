import { useEffect } from "react";

export default function Wiki() {
  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <div>
      <p>wiki</p>
    </div>
  );
}
