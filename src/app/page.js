//{fruits.map((val,idx,arr)=>{return(<li key={fruits}>{val}</li>)})}
import styles from "./page.module.css";
import { Col, Container, Row} from "react-bootstrap";
import Leftside from "../component/HOME/side";
import Rightside from "../component/HOME/right";
import Image from "next/image";

export default function Home() {
  let component=["🏠 HOME","ℹ️ ABOUT","🛎️ SERVICE","🗂️ PORTFOLIO","📰 NEWS","📞 CONTACT"];
  return (
    <div>
      
      <Container>
        <Row>
            <Col sm={"3"}>
            INDIA
             
            <Leftside>
              
              { <ul>
                   {component.map((val,idx,arr)=>{return(<li key={idx}>{val}</li>)})}
              </ul>}
              
            </Leftside> 
            
            </Col>
            
            <Col>
            
             <Rightside> 
              
                    <img width="300" height="300" src="3.jpeg" alt="myself"></img>
                    <h3>A BEAUTIFUL FLOWER</h3>
                    <h8>"Hey,🌷 "In the garden of life, be a flower that"</h8>
                    <p>"spreads beauty wherever it grows."</p> 
                  
 
                  
              
            </Rightside>
            </Col>
          </Row>
        </Container>
      

    </div>
  )
}
