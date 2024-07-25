"use client";

import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import Title from "../../components/title";

export default function About({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  return (
    <section id="about" className="max-w-[100vw] overflow-hidden">
      <div className="container mx-auto p-6 lg:p-12 flex flex-col items-end md:items-center md:gap-14">
        <Title text={dictionary.fund.title} />
        <div className="flex justify-between items-center gap-4">
          <svg
            width="331"
            height="203"
            viewBox="0 0 331 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M317.8 184.7C307.8 196.2 292.6 202 273.3 202C258.2 202 240.6 198.4 221 191.2C181.3 176.6 136.5 148.5 94.8 112.2C54.3 76.9 21.1 37.5 1 1H37.3C56 30.1 83.1 60.6 115.3 88.7C154.2 122.6 195.5 148.6 231.7 161.9C261.8 173 285.7 173.8 294.2 164.1C302.7 154.4 298.5 130.8 283.5 102.5C267.2 71.9 240.1 38.5 206.4 7.4C204.3 5.4 201.6 3 199.4 1.1H206.7H244.6C244.7 1.2 244.7 1.2 244.8 1.3C273.1 29.9 296 59.9 311 88.1C333.3 129.7 335.7 164.1 317.8 184.7Z"
              stroke="#87B466"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M226.4 135.5C240.704 135.5 252.3 123.904 252.3 109.6C252.3 95.2958 240.704 83.7 226.4 83.7C212.096 83.7 200.5 95.2958 200.5 109.6C200.5 123.904 212.096 135.5 226.4 135.5Z"
              fill="#87B466"
            />
          </svg>
          <p className="text-sm md:text-xl max-w-[60%] font-mono">{dictionary.fund.description}</p>
        </div>
      </div>

      <div className="relative">
        <div className="container mx-auto p-6 md:p-12">
          <Title text={dictionary.team.title} />
          <ul className="flex items-baseline justify-between gap-6 md:gap-12 mt-8 md:mt-16 relative z-10 flex-wrap md:flex-nowrap">
            {Object.entries(dictionary.team).map((items, index) => {
              return items.map((member) => {
                if ((typeof member != "string") && Boolean(member)) {
                  return (
                    <li
                      className="flex flex-col items-center text-center gap-4 md:gap-10 max-w-[40%]"
                      key={member.title}
                    >
                      <Image
                        src={`/image/member${index}.png`}
                        width={255}
                        height={238}
                        alt="Photo of team member"
                      />
                      <h3 className="text-xl md:text-2xl uppercase">{member.title}</h3>
                      <p className="text-sm md:text-xl font-mono">{member.description}</p>
                    </li>
                  );
                }
              })
            })}
          </ul>

          <div className="absolute top-24 left-0 right-0 max-w-[100vw]">
            <svg
              width="1440"
              height="500"
              viewBox="0 0 1440 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 499C12.5888 452.167 28.3997 409.08 46.8333 371.538C76.9566 310.243 112.775 266.557 150.466 245.276C180.365 228.416 211.387 225.418 240.161 236.733C276.354 250.896 305.953 286.414 326.859 340.216C326.035 285.14 330.231 232.537 339.523 185.479C348.29 141.268 361.104 103.877 377.739 74.4277C396.697 40.7826 420.076 18.3776 447.202 7.73702C476.052 -3.57792 507.074 -0.580584 536.897 16.2794C574.589 37.6354 610.482 81.2466 640.53 142.542C669.979 202.489 692.759 276.748 706.397 357.376C714.49 405.109 719.06 452.766 720.109 499"
                stroke="#87B466"
                strokeMiterlimit="10"
              />
              <path
                d="M721.009 499C733.597 452.242 749.408 409.08 767.842 371.538C797.965 310.243 833.783 266.557 871.475 245.276C901.373 228.416 932.396 225.418 961.17 236.733C997.363 250.896 1026.96 286.414 1047.87 340.216C1047.04 285.14 1051.24 232.537 1060.53 185.479C1069.3 141.268 1082.11 103.877 1098.75 74.4277C1117.71 40.7826 1141.08 18.3776 1168.21 7.73702C1197.06 -3.57792 1228.08 -0.580584 1257.91 16.2794C1295.6 37.6354 1331.49 81.2466 1361.54 142.542C1390.99 202.489 1413.77 276.748 1427.41 357.376C1435.5 405.109 1440.07 452.766 1441.12 499"
                stroke="#87B466"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
