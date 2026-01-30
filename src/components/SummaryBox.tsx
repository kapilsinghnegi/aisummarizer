import { MdContentCopy } from "react-icons/md";
import toast from "react-hot-toast";

interface SummaryBoxProps {
  summary: string;
}

const SummaryBox = ({ summary }: SummaryBoxProps) => {
  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    toast.success("Summary copied!");
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">
        Article <span className="blue_gradient">Summary</span>
      </h2>

      <div className="summary_box">
        <p className="text-sm whitespace-pre-line">{summary}</p>
        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={copySummary}
            className="flex items-center gap-1 text-sm transition-colors text-zinc-600 hover:text-blue-700"
            aria-label="Copy summary"
            title="Copy Summary"
          >
            <MdContentCopy aria-hidden="true" />
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
