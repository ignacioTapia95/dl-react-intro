import Badge from 'react-bootstrap/Badge';

function Tags({tags, color}) {
    return (
        <>
            <Badge className='tag' bg={color}>{tags}</Badge>
        </>
    )
}

export default Tags;