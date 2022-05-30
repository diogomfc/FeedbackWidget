import { ArrowLeft, Camera } from "phosphor-react";
import { useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { BackButton } from "../../BackButton";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../WidgetForm/ScreenshotButton";


interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackTypeChange: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackTypeChange,
  onFeedbackSent
}: FeedbackContentStepProps) {

  const feedbackTypeData = feedbackTypes[feedbackType];

  const [isScreenshot, setIsScreenshot] = useState<string | null>(null);
  const [isComment, setIsComment] = useState('');

  function handleSubmitFeedback(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(isScreenshot, isComment);
    onFeedbackSent();

  }


  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackTypeChange}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2 px-4 mx-4">
          <img className="w-6 h-6" src={feedbackTypeData.image.source} alt={feedbackTypeData.image.alt} />
          {feedbackTypeData.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] tex-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Escreva aqui o seu feedback"
          onChange={(e) => setIsComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">

          <ScreenshotButton
            //onClick={() => { setIsScreenshot("screenshot") }}
            onScreenshotTook={setIsScreenshot}
            screenshot={isScreenshot}

          />

          <button
            type="submit"
            disabled={isComment.length === 0}
            className="py-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>

      </form>

    </>
  )
}