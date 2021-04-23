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
  addTag: payload => dispatch(addTag(payload)),
  changeDuration: payload => dispatch(changeDuration(payload)),
  removeTag: payload => dispatch(removeTag(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
