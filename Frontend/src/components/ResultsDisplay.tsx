import { PieChart } from "@mui/x-charts/PieChart";

interface questionResult {
  label: string;
  value: number;
  color: string;
}

interface ResultsDisplayProps {
  correct: number;
  incorrect: number;
  skipped: number;
}

export default function ResultsDisplay({
  correct,
  incorrect,
  skipped,
}: ResultsDisplayProps) {
  const data: questionResult[] = [
    { label: "Correct", value: correct, color: "green" },
    { label: "Incorrect", value: incorrect, color: "red" },
    { label: "Skipped", value: skipped, color: "gray" },
  ];
  return <PieChart series={[{ data, innerRadius: 75 }]} />;
}
