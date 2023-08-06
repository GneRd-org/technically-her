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
  description: "We are looking for a skilled Software Engineer...",
};

export const JobPosting: React.FC = () => {
  return (
    <div className="bg-primaryDark p-4 drop-shadow-xl rounded-lg">
      <h2>{jobDetails.title}</h2>
      <p>Company: {jobDetails.company}</p>
      <p>Location: {jobDetails.location}</p>
      <p>Description: {jobDetails.description}</p>
    </div>
  );
};
