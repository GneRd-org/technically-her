import { BsFillUnlockFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { Card, Footer } from "../..";
import { Learner } from "../../../assets";
import { AuthService } from "../../../service";
import { toast } from "react-hot-toast";
//import { useNavigate } from "react-router-dom";

export const Landing = () => {
  //const navigate = useNavigate();
  const handleSignIn = () => {
    AuthService.signInWithGitHub().then((res) => {
      console.log(res);
      if (res) {
        toast.success("Signed in successfully");
      }
    });
    /*     if (data) toast.success("Signed in successfully");
    if (error) toast.error("Failed to sign in"); */
  };
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark flex items-center py-2">
        <section>
          <h1 className="text-5xl">
            Technically<span className="text-teal-400">Her</span>
          </h1>
          <h2 className="text-4xl">Progressive Advancement!</h2>
          <p>
            Get started on your tech journey with TechnicallyHER, where
            empowerment meets innovation!
          </p>
          <button
            className="rounded-lg py-1.5 px-3 font-semibold bg-[#90CDF4]"
            onClick={() => handleSignIn()}
          >
            Get Started
          </button>
        </section>
        <img src={Learner} alt="learner" />
      </section>
      <section className="flex justify-between items-center gap-5 bg-primaryDark min-h-[240px] px-20 ">
        <Card
          image={<BsFillUnlockFill size={40} />}
          text="Unlock your potential with our comprehensive upskilling courses. Master coding languages and cutting-edge tech trends for the skills the industry demands."
        />
        <Card
          image={<FaGraduationCap size={40} />}
          text="Ace tech job interviews with confidence! Our AI-driven simulations and personalized coaching prepare you to land your dream role."
        />
        <Card
          image={<FaTrophy size={40} />}
          text="For companies, we provide tools to promote diversity and eliminate gender bias in the hiring process. Our platform empowers recruiters to make informed and unbiased hiring decisions."
        />
      </section>
      <section className="bg-secondaryDark justify-center flex items-center text-center">
        <Footer />
      </section>
    </main>
  );
};
