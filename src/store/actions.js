
const actions = {
  getStepStatus ({commit}, url) {
    return new Promise((resolve, reject) => {
      baseApi.getStepStatus().then(res => {
        if(res.status){
		  resolve(res.data)
          const {current, list,flow_target} = res.data;
          commit('setStepsData', {stepsData: list});
		  commit('setCurrent', {current: current});
		  //老师跳转到360
		  if(flow_target){
			window.location = flow_target; 
		  }
        }else{
          reject(res.info)
        }
      })
    });
	},
}
export default actions
