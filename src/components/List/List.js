import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js'
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImage={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={this.props.column[0]} />
          <Column columnTitle={this.props.column[1]} />
          <Column columnTitle={this.props.column[2]} />
        </div>
      </section>
    )
  }
}

export default List;
