import React, { useEffect, useState } from "react";

// Define the type for the company details
interface CompanyDetails {
  name: string;
  description: string;
  values: string[];
}

const CompanyProfile: React.FC = () => {
  const [company, setCompany] = useState<CompanyDetails | null>(null);

  // Mock company data (replace this with API fetch in a real scenario)
  const fetchCompanyData = () => {
    setTimeout(() => {
      const mockCompanyData: CompanyDetails = {
        name: "TechCo Inc.",
        description:
          "is a cross-industry API Marketplace that offers developers, entrepreneurs and businesses access to the fastest growing library of open APIs.",
        values: [
          "Innovation",
          "Customer Focus",
          "Excellence",
          "Collaboration",
          "Integrity",
          "Diversity and Inclusion",
        ],
      };
      setCompany(mockCompanyData);
    }, 1000); // Simulate API call delay
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primaryDark h-full p-4 drop-shadow-lg rounded-lg">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <h2>Values:</h2>

      {company.values.map((value, index) => (
        <span
          key={index}
          className=" text-xs border p-1 border-teal-200 rounded-xl"
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CompanyProfile;
