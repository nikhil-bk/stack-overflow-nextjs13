import JobsCard from "@/components/cards/JobsCard";
import UserCard from "@/components/cards/UserCard";
import Filter from "@/components/shared/Filter";
import Pagination from "@/components/shared/Pagination";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

import { CountriesFilters } from "@/constants/filters";
import { getJobsInfo } from "@/lib/actions/jobs.actions";
import { SearchParamsProps } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Dev overflow",
};
const JobData = [
  {
    job_title: "-- New Orleans, LA",
    job_description:
      "Build your career at Sazerac! With nearly four centuries of rich history, Sazerac Company has flourished as an independent, American family-owned company with operations in the United States and around",
    job_city: "Houston",
    // job_city:null,
    job_state: "TX",
    job_country: "US",
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    job_employment_type: "CONTRACTOR",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
  },
  {
    job_title: "-- New Orleans, LA",
    job_description:
      "Build your career at Sazerac! With nearly four centuries of rich history, Sazerac Company has flourished as an independent, American family-owned company with operations in the United States and around",
    job_city: "Houston",
    job_state: "TX",
    job_country: "US",
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    job_employment_type: "CONTRACTOR",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
  },
];
const Page = async ({ searchParams }: SearchParamsProps) => {
  const result = await getJobsInfo({
    searchQuery: searchParams.q,
    filter: searchParams.filter,
    page: searchParams.page ? +searchParams.page : 1,
  });
  // console.log("results--->", result[0]);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />

        <Filter
          filters={CountriesFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          placeholder="Select a Location"
        />
      </div>
      <section className="light-border mb-9 mt-11 flex flex-col gap-9 border-b pb-9">
      
        {result.length!==0?result?.map((item:any, idx:any) => (
          <JobsCard key={idx} data={item} />
        )):<p>Oops, No jobs found matching your criteria, try different location or keyword!!</p>}
        {}
      </section>
      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result?.isNext}
        /> */}
      </div>
    </>
  );
};

export default Page;
