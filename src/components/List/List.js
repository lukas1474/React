import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';



class List extends React.Component {

  state = {
    columns: this.props.columns || [],
    
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    columns: PropTypes.array,
    description: PropTypes.node.isRequired,
    image: PropTypes,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
        
  }

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    {console.log(this.props.columns);}
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImage={this.props.image}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)} 
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>  
        </div>
      </section>
      
    );
  }
  
}

export default List;
