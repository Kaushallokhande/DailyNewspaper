
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import React from 'react'


const NewsItem = (props) => {
    let { title, description, imageurl, readUrl, author, publishedAt } = props;
    return (
        <Card style={{ width: '18rem', minHeight: '500px', maxHeight: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Img
                variant="top"
                src={imageurl}
                style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{title}...<h6>
                    Example heading <Badge bg="secondary">New</Badge>
                </h6></Card.Title>
                <Card.Text>{description}...</Card.Text>
                <Button variant="primary" href={readUrl} target='_blank'>Read more</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small>
            </Card.Footer>
        </Card>
    )
}

export default NewsItem