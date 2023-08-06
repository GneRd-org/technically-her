import React from "react";

// Define the type for the job details
interface JobDetails {
  title: string;
  company: string;
  location: string;
  description: string;
}

// Sample job details
const jobDetails: JobDetails = {
  title: "Software Engineer",
  company: "Chenosis Inc.",
  location: "Remote",
  description:
    "We are looking for a skilled Software Engineer, who has a passion for API development",
};

export const JobPosting: React.FC = () => {
  return (
    <div>
      <h2>{jobDetails.title}</h2>
      <p>Company: {jobDetails.company}</p>
      <p>Location: {jobDetails.location}</p>
      <p>Description: {jobDetails.description}</p>
    </div>
  );
};
