import { ArrowLeft } from "phosphor-react";

interface onFeedbackTypeChangeProps {
  onFeedbackTypeChange: () => void;
}

export function BackButton({ onFeedbackTypeChange }: onFeedbackTypeChangeProps) {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Retornar para os tipos de feedback"
      onClick={onFeedbackTypeChange}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  )
}