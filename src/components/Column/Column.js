import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component  {
  state = {
    cards: this.props.cards || [],
    
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}<span><Icon name={this.props.icon}/></span></h3>
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>  
      </section>
    );
  }
}

export default Column;