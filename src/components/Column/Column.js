import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component  {
 
  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {

    const {title, icon, cards, addCard} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span><Icon name={icon}/></span></h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {<Creator text={settings.cardCreatorText} action={addCard}/>  
        }
      </section>
    );
  }
}

export default Column;