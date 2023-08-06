import { Button, Footer } from "../..";
import { Interview } from "../../../assets";
import { culture } from "../../../assets";

export const Home = () => {
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark flex items-center py-3">
        <section>
          <h1 className="text-5xl">
            Interview Ready
          </h1>
          <p>
          Gain the confidence to ace your tech job interviews with our AI-driven interview simulations and personalized coaching. Let's prepare you to stand out and land your dream tech role.
          </p>
          <Button buttonType={"common"}>Prepare for Interviews</Button>
        </section>
        <img src={Interview} alt="Interview picture" width={450}/>
      </section>
      <section className="flex justify-between items-center gap-5 bg-primaryDark py-3 px-3">
      <img src={culture} alt="Interview picture" width={450}/>
        <section>
          <h1 className="text-5xl">
          Culture Fit Analysis
          </h1>
          <p>
          We understand the importance of finding the right fit for your career. Our culture fit analysis helps you discover tech companies where you'll thrive and contribute your unique strengths.
          </p>
          
          <Button buttonType={"common"}>Find Your Fit</Button>
        </section>
      </section>
      <section className="bg-secondaryDark justify-center flex items-center text-center">
        <Footer />
      </section>
    </main>
  );
};
