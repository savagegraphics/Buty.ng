import { Fragment } from "react";
import styles from "@/app/styles/Home.module.css";
import Card from "./components/Home/Card";
import Hero from "./components/Home/Hero";
import cardData from "@/app/data/Card.json";

export default function Home() {
  return (
    <main>
      <section className="py-12 lg:pb-24">
        <Hero />
      </section>
      <section className={styles.card_showcase}>
        <div className=" px-4 lg:px-24 lg:py-32 py-16 md:px-6">
          <h3 className="text-center font-madeMellow lg:text-[64px] md:text-4xl text-2xl text-eaziGreen">
            For Individuals and Businesses
          </h3>
          <p className="my-4 lg:text-xl text-center text-[#292A29]">
            Join 200+ businesses using Eazipay&rsquo;s easy solution.
          </p>

          <div
            className={`my-8 lg:my-12 flex flex-col xl:flex-row justify-center items-center ${styles.home_card_container}`}
          >
            {cardData.map((details, i) => (
              <Fragment key={i}>
                <Card details={details} />
              </Fragment>
            ))}
          </div>
          <div className="my-2">
            <p className="tracking-[0.2px] text-xl text-center text-eaziDark">
              We are happy to answer your queries. Please, reach us at <br />{" "}
              <span className="text-[#EA4E4B]">hello@myeazipay.com</span>
              and expect our response shortly after.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="py-12 lg:py-20">
          <h3></h3>
          <div className="flex justify-center items-center flex-col-reverse lg:flex-row">
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
