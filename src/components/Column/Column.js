import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component  {
 
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {

    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span><Icon name={icon}/></span></h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>  
        */}
      </section>
    );
  }
}

export default Column;