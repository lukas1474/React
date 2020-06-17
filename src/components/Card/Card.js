import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';


class Card extends React.Component  {
    static propTypes = {
      title: PropTypes.node,
      children: PropTypes.node,
    }
    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
        </section>
      );
    }
}

export default Card;