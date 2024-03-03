import Card from 'react-bootstrap/Card';
import Tags from './Tags.jsx';

function MyCard({image, name, desc, tag, color_tag}) {
    return (
        <>
            <Card className='card' style={{ width: "18rem" }}>
                <Card.Img className='cardImage' variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Tags
                        tags={tag}
                        color={color_tag}
                    />
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard;