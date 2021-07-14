//this set of helpers will support both Foods and Hobbies

// I want to take an available "thing" list, compare it to a users list of currently associated "things's" and return a list that only includes "things" not associated to the user
//"thing" is an object that will contain an id and name field
export function makeAvailableList(thingList, userThingList){
  return thingList.filter( thing => {
    const result = userThingList.find( t => t.name === thing.name)
    return result === undefined || !result
  }).map( thing => {
    return {
      value: thing.id,
      label: thing.name
    }
  })
}