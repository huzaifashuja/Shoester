import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import "./About.css"
export const About = () => {
    return (
        <div>
            <Header/>
            <div className="contai container">
               <h1 className="mx-auto">Shoester</h1>
                <h6 style={{marginBottom:'20px'}} >Shoester is your place for athletic and easygoing shoes for the entire family from many name brands. You’ll discover styles for ladies, men and children from brands like Nike, Converse, Vans, Sperry, Madden Girl, Skechers, ASICS and then some! With stores in the U.S. furthermore, Canada and much more choice online at Famous.com and FamousFootwear.ca, Shoester is a main family footwear goal for the popular brands you know and love. Shoester is a piece of parent Inc., an assorted arrangement of worldwide footwear brands. Joined, these brands enable make to parent an organization with both an inheritance and a mission. Parent organization’ inheritance incorporates over 130-long stretches of craftsmanship, an enthusiasm for fit and a business canny, with a mission to keep on rousing individuals to feel better… feet first.</h6>
                <img className="about" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c0ec6abb-8dbf-4fdf-9a72-d2d7785619c0/pegasus-trail-2-gore-tex-trail-running-shoe-JDT8pZ.jpg" alt=""/>
                <img className="about" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3add39aa-553a-4f57-a1c0-e08dbd2a61b1/air-max-plus-iii-shoe-vP80ld.jpg"  alt=""/>
                <img className="about" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/16ba149e-27e8-439f-815d-dea787649488/air-max-90-surplus-shoe-9hHdK7.jpg" alt=""/>
                <img className="about" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/h0tz85j2phff29bdkabt/air-force-1-07-shoe-6jXPDp.jpg" alt=""/>
                </div>
            <Footer/>
            
        </div>
    )
}

export default About;