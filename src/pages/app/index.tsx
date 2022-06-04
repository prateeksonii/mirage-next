import type { NextPage } from "next";
import Head from "next/head";
import AppContent from "../../components/AppContent";
import Navbar from "../../components/Navbar";

const AppIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mirage - App</title>
      </Head>
      <Navbar />
      <div className="mx-auto grid w-3/4 grid-cols-3">
        <div></div>
        <AppContent />
        <div></div>
      </div>
    </>
  );
};

export default AppIndexPage;
