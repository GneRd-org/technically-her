import { JobPosting, Pie } from "../..";
import CompanyProfile from "../../commons/company-profile/company-profile";

export const CultureFit = () => {
  const profileValues = [
    "Impact",
    "Kindness",
    "Growth",
    "Innovation",
    "Excellence",
  ];
  const companyValues = [
    "Innovation",
    "Customer Focus",
    "Collaboration",
    "Integrity",
    "Diversity and Inclusion",
  ];

  const profileValuesSet = new Set(profileValues);
  const companyValuesSet = new Set(companyValues);

  const intersection = new Set(
    [...profileValuesSet].filter((x) => companyValuesSet.has(x))
  );

  const percentage = (intersection.size / profileValuesSet.size) * 100;

  return (
    <main>
      <div>
        <header className="pb-4">
          <h1 className="text-3xl">Job Postings</h1>
          <div className="h-1 w-16 rounded-sm bg-gradient-to-r from-[#7467F0] to-[#2896E9]" />
        </header>
        <JobPosting />
      </div>
      <div>
        <header className="pb-4">
          <h1 className="text-3xl">Company Profile</h1>
          <div className="h-1 w-16 rounded-sm bg-gradient-to-r from-[#7467F0] to-[#2896E9]" />
        </header>
        <CompanyProfile />
      </div>

      <div>
        <header className="pb-4">
          <h1 className="text-3xl">Your Match to Chenosis</h1>
          <div className="h-1 w-16 rounded-sm bg-gradient-to-r from-[#7467F0] to-[#2896E9]" />
        </header>
        <Pie colour="#7467F0" percentage={percentage} />
      </div>
    </main>
  );
};
