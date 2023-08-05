import { Card } from "../..";
import { CiUnlock } from "react-icons/ci";

export const Home = () => {
  return (
    <main>
      <section>
        <Card
          image={<CiUnlock />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
      </section>
    </main>
  );
};
