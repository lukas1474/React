import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './SearchResults.scss';
import Container from '../Container/Container';

class SearchResults extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      //columns: PropTypes.array,
    }
    render() {
      const { title, cards } = this.props;

      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}>{title}</h3>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </section>
        </Container>
      );
    }
}

export default SearchResults; 