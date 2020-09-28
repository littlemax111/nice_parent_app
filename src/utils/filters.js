export const genderFilter = val => {
  let name = '';
  if(val==1){
    name='男'
  }
  if(val==2){
    name='女'
  }
  return name;
}



/*
 * 校区匹配
 * list  校区列表
 * value   校区id
 */
export const campusFilter = (list,value)=>{
  let name = ''
  list.map((item,index)=>{
    if(item.campus_id===value){
      name = item.campus_name
    }
  })
  return name
}