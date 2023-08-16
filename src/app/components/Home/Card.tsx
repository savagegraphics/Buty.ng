import styles from "@/app/styles/Home.module.css";

type Props = {
  details: {
    title: string;
    description: string[];
  };
};

const Card = ({ details }: Props) => {
  return (
    <div
      className={`${styles.home_card} cursor-pointer text-white flex-1 flex justify-center flex-col  px-6 pt-12 pb-10 md:p-12 xl:py-20 xl:px-16 lg:min-h-[370px] my-3 lg:p-12  bg-eaziGreen`}
    >
      <p className="text-xl text-[28px] font-bold mb-6">{details.title}</p>
      {details.description.map((details, i) => (
        <p
          className="text-lg my-2 leading-[24px]"
          key={i}
        >
          {details}
        </p>
      ))}
    </div>
  );
};

export default Card;
