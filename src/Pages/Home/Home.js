import Header from "../../Components/Header/Header";
import { useState } from "react";
import "./Home.css";
import Cards from "../../Components/Cards/Cards";
import { motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import { photos } from "../Landing-page/Photos";
export const Home = () => {
  const [cards] = useState(photos);
  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        className="container"
      >
        {cards.map((card) => {
          return <Cards card={card} key={card.id} />;
        })}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
