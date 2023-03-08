import React from "react";

function TimelineItem({ year, title, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-900 mx-auto md:w-6/12 md:m-auto w-10/12">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-900 rounded-full mt-1.5 -left-1.5 border border-white  " />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-medium md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md text-normal">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
        </p>
        <p className="my-2 text-base font-normal text-stone-900">{details}</p>
      </li>
    </ol>
  );
}
export default TimelineItem;
