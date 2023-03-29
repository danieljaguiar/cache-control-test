import React from "react";
import { GetServerSideProps, NextPage, GetServerSidePropsResult } from "next";

interface Props {}

const NEXTCACHEPAGE: NextPage<Props> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      I have headers set on next.config.js <br />
      Cache-Control to s-maxage=610 <br />
      Test-Type to next
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
  return {
    props: {},
  };
};

export default NEXTCACHEPAGE;
