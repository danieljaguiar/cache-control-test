import React from "react";
import { GetServerSideProps, NextPage, GetServerSidePropsResult } from "next";

interface Props {}

const SSRCACHEPAGE: NextPage<Props> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      I have headers set on getServerSideProps. <br />
      Cache-Control to s-maxage=600 <br />
      Test-Type to ssr
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context): Promise<GetServerSidePropsResult<Props>> => {
  context.res.setHeader("Cache-Control", "max-age=600, s-maxage=600");
  context.res.setHeader("Test-Type", "ssr");

  return {
    props: {},
  };
};

export default SSRCACHEPAGE;
