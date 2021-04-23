import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, removeTag, addTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTag: tags => dispatch(addTag(tags)),
  changeDuration: duration => dispatch(changeDuration(duration)),
  removeTag: tags => dispatch(removeTag(tags)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
