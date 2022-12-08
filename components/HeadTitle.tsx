import Head from "next/head";
import React from "react";

interface HeadTitleProps {
  title: string;
  children?: React.ReactNode;
}

const HeadTitle = ({ title, children }: HeadTitleProps) => {
  return (
    <Head>
      <title>{`Swanie cleaning service | ${title} `}</title>
      {children}
    </Head>
  );
};

export default HeadTitle;
