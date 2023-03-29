import React from "react";
import { GetServerSideProps, NextPage, GetServerSidePropsResult } from "next";

interface Props {}

const VERCELCACHEPAGE: NextPage<Props> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      I have headers set on vercel. <br />
      Cache-Control to s-maxage=620 <br />
      Test-Type to vercel
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
  return {
    props: {},
  };
};

export default VERCELCACHEPAGE;
