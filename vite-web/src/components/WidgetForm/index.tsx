import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Image de um inseto"
    }
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Image de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento"
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixa seu feedback</span>
        <CloseButton />
      </header>
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) :
        <p>Hello World</p>
      }

      <footer className="text-xs leading-6 text-neutral-400">
        <p>Feito com ♥ pela <a className="underline underline-offset-2" href="http://" > Rocketseat </a></p>
      </footer>
    </div>
  )
}