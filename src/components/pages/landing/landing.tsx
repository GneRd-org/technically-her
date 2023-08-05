import { CiUnlock } from "react-icons/ci";
import { Button, Card, Footer } from "../..";
import { Learner } from "../../../assets";

export const Landing = () => {
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark flex items-center">
        <section>
          <h1 className="text-5xl">
            Technically<span className="text-teal-400 ">Her</span>
          </h1>
          <h2 className="text-4xl">Progressive Advancement!</h2>
          <p>
            Get started on your tech journey with TechnicallyHER, where
            empowerment meets innovation!
          </p>
          <Button buttonType={"common"}>Get Started</Button>
        </section>
        <img src={Learner} alt="learner" />
      </section>
      <section className="flex justify-between items-center gap-5 bg-primaryDark min-h-[240px] px-20">
        <Card
          image={<CiUnlock size={40} />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
        <Card
          image={<CiUnlock />}
          text="Ace tech job interviews with confidence! Our AI-driven simulations and personalized coaching prepare you to land your dream role."
        />
        <Card
          image={<CiUnlock />}
          text="For companies, we provide tools to promote diversity and eliminate gender bias in the hiring process. Our platform empowers recruiters to make informed and unbiased hiring decisions."
        />
      </section>
      <section className="bg-secondaryDark justify-center flex">
        <Footer />
      </section>
    </main>
  );
};
