import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from './Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.node.isRequired,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
          <h3 className={styles.title}>{this.props.title}
            <span className={styles.icon}>
              <Icon name={this.props.icon} />
            </span>
          </h3>
          <div className={styles.cards}>
            {
              this.props.cards.map(card => <Card key={card.key} title={card.title} ></Card> )
            }
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
    )
  }
}
export default Column; 