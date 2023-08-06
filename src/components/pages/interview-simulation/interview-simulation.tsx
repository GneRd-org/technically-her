import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "../..";
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";
import { useState } from "react";
import api from "../../../api/api";

export const InterviewSimulation = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [question, setQuestion] = useState(
    "If I was asked this question: " +
      "Tell me about a challenge or conflict you've faced at work, and how you dealt with it.? " +
      "Does my answer follow the STAR method? What can I improve? My Anwser:" +
      transcript
  );
  const [interviewQuestions, setInterviewQuestions] = useState([
    "Tell me about a challenge or conflict you've faced at work, and how you dealt with it.",
  ]);

  const [response, setResponse] = useState("");
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const requestBody = {
        prompt: question,
        max_tokens: 1500,
        temperature: 0.2,
      };

      const response = await api.post("/completions", requestBody);
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark h-1/3 flex flex-col gap-2">
        <h1 className="text-5xl pt-3">Let's Get You Interview Ready!</h1>
        <p>
          Get ready to showcase your interview skills. Click the 'Start
          Recording' button below and answer the interview questions out loud.
          We'll transcribe your responses for your review and feedback.
        </p>
      </section>
      <section>
        <h2 className="text-3xl">
          {
            interviewQuestions[
              Math.floor(Math.random() * interviewQuestions.length)
            ]
          }
        </h2>
      </section>
      <section className="flex gap-3 bg-secondaryDark justify-evenly">
        <textarea
          onChange={(e) => setQuestion(e.target.value)}
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
          <Button buttonType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </section>
      </section>

      <section>
        <h1>Feedback and Improvements</h1>
        <p>{response}</p>
      </section>
    </main>
  );
};
