export function heroNameAction(dataPayload?: string) {
  return {
    type: 'HERO_NAME',
    payload: dataPayload
  }
}