import {Card} from 'react-bootstrap'
import "./Cards.css"
import {Link, Outlet } from 'react-router-dom';
import { motion } from "framer-motion"
export const Cards = ({card}) => {
    return (
       <motion.div  whileHover={{
                scale: 1.2,
                transition: {
                  duration: .2
                }
              }}>
            <Card key={card.id} className="decoration" className="size" >
                <Link to={`/home/${card.id}`} className="decoration">
                <Card.Img height="250" variant="top" src={card.src} />
                </Link>
                <Card.Body>
                
                <Card.Title>{card.name} </Card.Title>
                </Card.Body>
                
            </Card>
            
            <Outlet/>
        </motion.div>
    )
}

export default Cards;