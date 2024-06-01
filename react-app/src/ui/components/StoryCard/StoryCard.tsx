import { Card } from "react-bootstrap";
import "./StoryCard.scss";
import { IStory } from "../../../models/models";

export const StoryCard = (props: IStory) => {
  const { title, abstract, url, imageUrl } = props;

  return (
    <Card onClick={() => window.open(url, "_blank")}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-start">{title}</Card.Title>
        <Card.Text className="text-start">{abstract}</Card.Text>
      </Card.Body>
    </Card>
  );
};
