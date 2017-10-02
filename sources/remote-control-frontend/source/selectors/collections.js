export function sensors(state) {
  return state.getIn(['collections', 'sensors']).toJS();
}
