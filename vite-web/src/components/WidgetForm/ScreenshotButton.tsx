import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../../components/Loading";

interface ScreenshotButtonProps {
  //onClick: () => void;
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {

  const [isScreenshotReady, setIsScreenshotReady] = useState(false);

  async function handleTakenScreenshot() {

    setIsScreenshotReady(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    console.log(base64image);

    onScreenshotTook(base64image)

    setIsScreenshotReady(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transitions-colors"
        onClick={() => onScreenshotTook(null)}
        style={{ backgroundImage: `url(${screenshot})`, backgroundSize: 180, backgroundPosition: 'right bottom' }}
      >
        <Trash weight="fill" />

      </button>
    )
  }

  return (
    <>
      <button
        type="button"
        className="p-2 bg-zinc-800 rounded-md boder-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
        onClick={handleTakenScreenshot}
      >
        {
          isScreenshotReady ? <Loading /> : <Camera className="w-4 h-4" />
        }
      </button>
    </>
  )
}