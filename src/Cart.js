import { useContext } from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import ProductContext from "./Context";

import { useNavigate } from "react-router-dom";
export default function Cart() {
  const context = useContext(ProductContext);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/checkout`; 
    navigate(path);
  }
  return (
    <div>
      <div>
      
      {context.cart.length > 0
        ? context.cart.map((value) => {
          
            return (
              <div>
              <Row>
                <Col>
                  <Card body>
                    <CardTitle tag="h5">
                      <img
                        alt=""
                        src={value.images[0]}
                        height="50"
                        width="50"
                      />
                      {value.title}
                    </CardTitle>
                    <CardText>{value.price}</CardText>
                     <Button onClick={() => context.removeProduct(value.id)}>
                      Remove Product
                    </Button>
                    
                  </Card>
                  
                </Col>
                
              </Row>  
              
              </div>
            );
            
          })
          
          : "No Products in the cart"}
          </div>
         
          <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Pay now
            </Button>
          
        
    </div>

    
    
  );
  
  
    
  

}
