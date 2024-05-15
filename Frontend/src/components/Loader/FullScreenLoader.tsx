import Loader from "./Loader";

interface FullScreenSpinnerProps {
  isLoading: boolean;
  loadingText: string;
}

export default function FullScreenSpinner({
  isLoading,
  loadingText,
}: FullScreenSpinnerProps) {
  return (
    <div
      style={{ display: isLoading ? "flex" : "none" }}
      className="inset-0 fixed  flex flex-col justify-center items-center bg-black opacity-70 z-50"
    >
      <div className="flex flex-col justify-center items-center p-5 opacity-100">
        <Loader />
        <p className="font-mono text-slate-50 mt-4">{loadingText}</p>
      </div>
    </div>
  );
}
