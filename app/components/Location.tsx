"use client";

import { Title } from "./elements/Title";

export const Location = () => {
  return (
    <div>
      <Title level={2}>Where to find us</Title>
      <div className="w-11/12 xl:w-full mx-auto rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7.117486569975103,%20-73.11132878293054+(Pizzahub)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </div>
  );
};
