const mutations = {
    grade(state,payload){
        state.grade=payload
    },
    city(state,payload){
        state.city=payload
    },
    school(state,payload){
        state.school=payload
    },
    classDate(state,payload){
        state.classDate=payload
    },
    gradeList(state,payload){
        state.gradeList=payload
    },
    campusList(state,payload){
        state.campusList=payload
    },
}
export default mutations
