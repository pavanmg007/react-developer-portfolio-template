import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
            </svg>
            <p className="text-content text-xs md:text-sm font-light pl-1">{company}</p>
          </div>
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z" />
              <path d="M8.00001 11.25L3.78201 7.51912C3.7234 7.4631 3.66539 7.40673 3.60801 7.35C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L12.392 7.35C12.392 7.35 12.242 7.49775 12.2195 7.51763L8.00001 11.25ZM4.40601 6.89813C4.40701 6.89813 4.52301 7.01362 4.54951 7.03837L8.00001 10.0905L11.455 7.03425C11.477 7.01362 11.594 6.89738 11.5945 6.897C12.1831 6.31542 12.5012 5.60514 12.5 4.875C12.5 3.97989 12.0259 3.12145 11.182 2.48851C10.3381 1.85558 9.19348 1.5 8.00001 1.5C6.80653 1.5 5.66194 1.85558 4.81803 2.48851C3.97411 3.12145 3.50001 3.97989 3.50001 4.875C3.49896 5.60559 3.81739 6.31628 4.40651 6.89813H4.40601Z" />
            </svg>

            <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
