export const putData =(dataFromServer: any)=> {
  return {
    type: 'PUT_DATA',
    payload: dataFromServer
  }
}

export const loadData = {
  type: 'LOAD_DATA'
}