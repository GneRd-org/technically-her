import { useNavigate } from "react-router-dom";
import { Interview } from "../../../assets";
import { culture } from "../../../assets";
import { Footer } from "../..";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark flex items-center py-3">
        <section>
          <section className="flex flex-col gap-2">
            <h1 className="text-5xl">Interview Ready</h1>
            <p>
              Gain the confidence to ace your tech job interviews with our
              AI-driven interview simulations and personalized coaching. Let's
              prepare you to stand out and land your dream tech role.
            </p>
          </section>

          <button
            className="rounded-lg py-1.5 px-3 font-semibold mt-2 bg-[#90CDF4]"
            onClick={() => navigate("/interviews")}
          >
            Prepare for Interviews
          </button>
        </section>
        <img src={Interview} alt="Interview picture" width={450} />
      </section>
      <section className="flex justify-between items-center gap-5 bg-primaryDark py-3 px-3">
        <img src={culture} alt="Interview picture" width={450} />

        <section>
          <section className="flex flex-col gap-2">
            <h1 className="text-5xl">Culture Fit Analysis</h1>
            <p>
              We understand the importance of finding the right fit for your
              career. Our culture fit analysis helps you discover tech companies
              where you'll thrive and contribute your unique strengths.
            </p>
          </section>
          <button
            className="rounded-lg py-1.5 px-3 font-semibold mt-2 bg-[#90CDF4]"
            onClick={() => navigate("/company-culture")}
          >
            Find your fit
          </button>
        </section>
      </section>
      <section className="bg-secondaryDark justify-center flex items-center text-center">
        <Footer />
      </section>
    </main>
  );
};
