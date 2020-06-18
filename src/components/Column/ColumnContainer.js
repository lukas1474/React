import {connect} from 'react-redux';
import Column from './column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = state => ({
  cards: state.cards,
});

export default connect(mapStateToProps)(Column);
