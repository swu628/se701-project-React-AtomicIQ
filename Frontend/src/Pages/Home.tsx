import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <div>
      <p className="bg-red-600 ">home</p>
    </div>
  );
}
