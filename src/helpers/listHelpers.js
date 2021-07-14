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

// I want to create an array of objects {name: "name"} to be able to dispatch to my API for addition, this list should not contain items alread associated
export function createItems(list, currentList){
  return list.filter( item => {
    const result = currentList.find( t => t.name === item.label)
    return result === undefined || !result
  }).map( item => {
    return {
      name: item.label
    }
  })
}

//I want to produce a list of items to delete from currentList if list does not contain
export function deleteItems(list, currentList){
  return currentList.filter( item => {
    const result = list.find( t => t.label === item.name)
    return result === undefined
  }).map( item => {
    return item.id
  })
}

//I want to create a packet that will contain all information needed to action a change in a CreateableSelect Add component
export function changePacket(userProfile, list, currentList){
  const createdList = createItems(list, currentList)
  const deleteList = deleteItems(list, currentList)
  return {
    willCreate: createdList.length > 0,
    createPacket: createListPacket(userProfile.id, createdList),
    willDelete: deleteList.length > 0 && createdList.length === 0,
    deletePacket: createListPacket(userProfile.id, deleteList)
  }
}

function createListPacket(userId, list){
  return {
    userId: userId,
    items: list
  }
}