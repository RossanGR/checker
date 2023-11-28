'use client'
import Image from "next/image";
import Camera from "../../../../public/cam.png";
import { useState } from "react";
import useWebcam from "@/app/hooks/useWebcam";
import validateClassroom from "@/app/hooks/useFaceChecker";

const Cam = () => {
  const [step, setStep] = useState(1);
  const { videoElementRef, imageElementRef, captureImage, reloadVideo } = useWebcam();

  async function changeStep() {
    if (step === 2) {
      const image = captureImage();
      const response = await validateClassroom(image || "");

      // API Guanabara
    }

    setStep(step + 1);
    reloadVideo();
  }

  return (
    <section>
      {step == 1 ? (<div className="bg-neutral-900 rounded-lg text-slate-50 my-20 p-20 flex ">
        <h2 className="text-2xl">
          A chamada está prestes a ser realizada, informe os alunos para olharem
          por um momento para a(s) câmera(s)!
        </h2>

        <Image
          className="w-1/4 block ml-auto"
          src={Camera}
          alt="Câmera"
          title="Câmera"
        />
      </div>) : (
        <>

          <video
            ref={videoElementRef}
            title="Câmera"
            className="w-2/4 block m-auto my-10"
          />

          <canvas
            ref={imageElementRef}
            className="w-2/4 block m-auto my-10"
          />
        </>
      )}


      <button onClick={() => changeStep()} className="block mx-auto outline outline-2 p-2 px-7 rounded-full hover:bg-green-500 hover:outline-none hover:text-white transition hover:delay-0">Continue</button>

    </section>
  );
};

export default Cam;
