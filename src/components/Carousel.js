import React from 'react';

import Card from '../components/Card';

import listenin from '../assets/images/ListenIn.png';
import orpheus from '../assets/images/OrpheusLogo_square.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'ListenIn',
                    subTitle: 'AI, BCI hearing aid to address cocktail party problem',
                    imgSrc: listenin,
                    link: 'https://www.youtube.com/watch?v=0SOuqN3godo',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Orpheus',
                    subTitle: 'Dynamic music stem splitter and player',
                    imgSrc: orpheus,
                    link: 'https://www.youtube.com/watch?v=A0xaP308D7I',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;