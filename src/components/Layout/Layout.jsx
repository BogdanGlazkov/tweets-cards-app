import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

export default function Layout() {
  return (
    <>
      <Header />
      <Section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
      <Footer />
    </>
  );
}
