import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "../..";
import { BsPlay } from "react-icons/bs";

export const InterviewSimulation = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <main>
      <section className="bg-secondaryDark">
        <h1 className="text-5xl">Let's Get You Interview Ready!</h1>
        <p>
          Get ready to showcase your interview skills. Click the 'Start
          Recording' button below and answer the interview questions out loud.
          We'll transcribe your responses for your review and feedback.
        </p>
      </section>
      <section className="flex gap-3 bg-primaryDark">
        <textarea
          className="w-full bg-secondaryDark text-white p-2"
          value={transcript}
          placeholder="Your answer will show here...."
        ></textarea>

        <section className="flex flex-col gap-2">
          <p>Microphone: {listening ? "on" : "off"}</p>
          <Button
            icon={<BsPlay size={20} />}
            buttonType="common"
            onClick={() =>
              SpeechRecognition.startListening().then((r) => console.log(r))
            }
          >
            Start Recording
          </Button>
          <Button
            buttonType="stop"
            onClick={() => SpeechRecognition.stopListening().then()}
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
