import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { photos } from "../../Pages/Landing-page/Photos";
import "./CardDetails.css";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const CardDetails = () => {
  const [photo] = useState(photos);
  const { id } = useParams();
  const shoeCard = photo.find((person) => person.id === Number(id));

  if (!shoeCard) return <h1>User Not Found</h1>;

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        className="col d-flex justify-content-center card-details"
      >
        <Card
          style={{ width: "30rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
        >
          <Card.Img variant="top" src={shoeCard.src} />
          <Card.Body>
            <Card.Title>{shoeCard.name} </Card.Title>
            <Card.Text>Price: {shoeCard.price} PKR</Card.Text>
            <Card.Text>
              The origin of the latest Nike ISPA design, the three-quarter-high
              VaporMax Flyknit Gator, offers a simple solution for the
              modern-day bicycle commuter. ISPA, a programme spearheaded by Nike
              Sportswear's special projects, stands for Improvise, Scavenge,
              Protect and Adapt. It takes the tried-and-true Nike ethos of
              listening to the athlete, then goes further by improving the
              interaction between the athlete and the built environment. For all
              the reasons that make lightweight Flyknit ultra responsive, it's
              less ideal in the autumn rain for hardcore commuters.
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CardDetails;
