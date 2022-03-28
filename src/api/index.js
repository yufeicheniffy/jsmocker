export function addKV(hycode,json){
    let formData = {hycode,json};
   return this.$post('MK004',formData)
}

export function getApis(){
    return this.$post('MK002')
}

export function changeKV(hycode,json){
    return this.$post('MK003',{hycode,json})
}
export function deleteKey(hycode){
    return this.$post('MK005',{hycode})
}
