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
        description: "We are a technology company...",
        values: [
          "Innovation",
          "Customer Focus",
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
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <h2>Values:</h2>
      <ul>
        {company.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyProfile;
