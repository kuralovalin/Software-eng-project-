import { Card } from "react-bootstrap";

export default function CardItem({src,name,desc}) {
  return (
    <Card style={{  borderRadius: 10, textAlign: "center", justifyContent: "center" }}> 
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
