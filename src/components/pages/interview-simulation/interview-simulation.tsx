import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "../..";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { useState } from "react";

export const InterviewSimulation = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [question, setQuestion] = useState(
    "What challenges did you face in a group project?"
  );
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <main className="h-full">
      <section className="bg-secondaryDark h-1/3 flex flex-col gap-2">
        <h1 className="text-5xl pt-3">Let's Get You Interview Ready!</h1>
        <p>
          Get ready to showcase your interview skills. Click the 'Start
          Recording' button below and answer the interview questions out loud.
          We'll transcribe your responses for your review and feedback.
        </p>
      </section>
      <section>
        <h2 className="text-3xl">{question}</h2>
      </section>
      <section className="flex gap-3 bg-secondaryDark justify-evenly">
        <textarea
          className="w-1/2 bg-primaryDark text-white p-2"
          value={transcript}
          placeholder="Your answer will show here...."
        ></textarea>

        <section className="flex flex-col gap-2">
          <p>Microphone: {listening ? "on" : "off"}</p>
          <Button
            icon={<BsFillPlayFill size={30} style={{ color: "#0F172A" }} />}
            buttonType="common"
            onClick={() =>
              SpeechRecognition.startListening().then((r) => console.log(r))
            }
          >
            Start Recording
          </Button>
          <Button
            icon={<BsFillStopFill size={30} style={{ color: "#0F172A" }} />}
            buttonType="stop"
            onClick={() =>
              SpeechRecognition.stopListening().then((r) => console.log(r))
            }
          >
            Stop Recording
          </Button>
          <Button buttonType="common" onClick={resetTranscript}>
            Clear Transcript
          </Button>
          <Button
            buttonType="submit"
            onClick={SpeechRecognition.abortListening}
          >
            Submit
          </Button>
        </section>
      </section>
    </main>
  );
};
