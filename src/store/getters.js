const getters = {
	basicInfoStatus (state, getters) {
		return state.stepsData.length > 0 ? state.stepsData.filter(step => step.name === 'basicInfo')[0].step : '';
	},
}
export default getters