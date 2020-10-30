import Button from "react-bootstrap/Button";
import "./Landing.css";
import Gallery from "react-photo-gallery";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { photos } from "./Photos";
export const Grid = () => {
  return (
    <div className="grid">
      <Gallery photos={photos} />

      <div className="content">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1,
          }}
          className="contain"
        >
          <img
            alt="Shoe"
            src="https://flaticons.net/icon.php?slug_category=shopping&slug_icon=shoe"
          />
        </motion.div>
        <Link to="home">
          <Button variant="outline-light" size="lg">
            Welcome to Shoester
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Grid;
