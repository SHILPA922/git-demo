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

            </Leftside> 
            
            </Col>
            
            <Col>
            
             <Rightside>

             </Rightside>
            </Col>
          </Row>
        </Container>
      

    </div>
  )
}
