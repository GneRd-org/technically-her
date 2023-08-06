import { JobPosting } from "../..";

export const CultureFit = () => {
  return (
    <main>
      <div>
        <header className="pb-4">
          <h1 className="text-3xl">Job Postings</h1>
          <div className="h-1 w-16 rounded-sm bg-gradient-to-r from-[#7467F0] to-[#2896E9]" />
        </header>
        <JobPosting />
      </div>
    </main>
  );
};
