import { makeAvailableList } from './listHelpers'

const item1 = {id: 1, name: "test"}
const item2 = {id: 2, name: "test2"}

const itemList = [item1, item2]
const userList = []

describe('makeAvailableList', () => {
  it('should return all when userList is empty', () => {
    expect(makeAvailableList(itemList, userList)).toHaveLength(2)
  })
  it('should return items not currently used', () => {
    userList.push(item1)
    const list = makeAvailableList(itemList, userList)
    expect(list).toHaveLength(1)
    expect(list[0].label).toEqual('test2')
    expect(list[0].value).toEqual(2)
  })
})