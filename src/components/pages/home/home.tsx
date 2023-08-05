import { Card } from "../..";
import { CiUnlock } from "react-icons/ci";
import { Learner } from "../../../assets";

export const Home = () => {
  return (
    <main>
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
        </section>
        <img src={Learner} alt="learner" />
      </section>
      <section className="flex justify-between items-center gap-5 bg-primaryDark">
        <Card
          image={<CiUnlock size={40} />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
        <Card
          image={<CiUnlock />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
        <Card
          image={<CiUnlock />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
      </section>
    </main>
  );
};
