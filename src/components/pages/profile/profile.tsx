import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import { Avatar } from "../..";

export const Profile = () => {
  const userProfile = {
    "Email Address": "refilwe.dev@gmail.com",
    "Phone Number": "012 345 6789",
    Location: "Johannesburg",
    "Employment Status": "Employed",
    "Education Level": "Bsc. Computer Science",
    "Years of Experience": "3 years",
    "Expected Salary": "R 45 000",
    Skills:
      "React, Tailwind, React Native, NodeJS, ExpressJS, MongoDB, PostgreSQL",
  };

  const getKeys = (obj: typeof userProfile) => {
    return Object.keys(obj);
  };

  const getValues = (obj: typeof userProfile) => {
    return Object.values(obj);
  };

  return (
    <main>
      <section className="drop-shadow-lg flex bg-primaryDark p-4 rounded-lg">
        <section className="profile-panel-avatar flex gap-4 w-[50%]">
          <Avatar className="" imgSrc="https://picsum.photos/100" />
          <section className="profile-panel__avatar ">
            <section className="profile-panel__info mb-3">
              <h3>Refilwe Mashile</h3>
              <p>Jr Software Engineer</p>
            </section>
            <section className="profile-options">
              <section className="profile-options__edit flex gap-2">
                <button
                  className="px-2 py-1 bg-slate-500 rounded-xl text-xs"
                  onClick={() => void ""}
                >
                  Edit
                </button>
              </section>
              Values:{" "}
              <span className=" text-xs border p-1 border-teal-200 rounded-xl">
                Impact
              </span>
              <span className=" text-xs border p-1 border-teal-200 rounded-xl">
                Excellence
              </span>
              <span className=" text-xs border p-1 border-teal-200 rounded-xl">
                Growth
              </span>
              <span className=" text-xs border p-1 border-teal-200 rounded-xl">
                Kindness
              </span>
              <span className=" text-xs border p-1 border-teal-200 rounded-xl">
                Innovation
              </span>
            </section>
          </section>
        </section>

        <section className="w-[50%] flex justify-between text-sm">
          <section className="profile-panel__details flex flex-col gap-1">
            {getKeys(userProfile).map((title) => {
              return <h1 key={title}>{title}</h1>;
            })}
          </section>
          <section className="profile-panel__details flex flex-col gap-1">
            {getValues(userProfile).map(
              (
                value:
                  | string
                  | number
                  | boolean
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined,
                key: Key | null | undefined
              ) => {
                return (
                  <h1
                    className={
                      ((key == 0 || key == 4) && "text-yellow-500") || ""
                    }
                    key={key}
                  >
                    {value}
                  </h1>
                );
              }
            )}
          </section>
        </section>
      </section>
    </main>
  );
};
