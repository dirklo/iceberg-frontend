
import { makeAvailableList, changePacket } from './listHelpers'

const item1 = {id: 1, name: "test"}
const item2 = {id: 2, name: "test2"}
const label1 = {id: 1, label: "test"}

const itemList = [item1, item2]
let userList = []
let currentList = []
let newList = []
let packet

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

describe('changePacket', () => {
  beforeEach(() => {
    newList = []
    currentList = []    
  })
  it('should create information packet', () => {
    packet = changePacket(1, newList, currentList)
    expect(packet.willCreate).toBe(false)
    expect(packet.willDelete).toBe(false)
  })
  it('should initiate willCreate', () => {
    newList.push(label1)
    packet = changePacket(1, newList, currentList)
    expect(packet.willCreate).toBe(true)
    expect(packet.createPacket.items[0].name).toEqual(label1.label)
  })
  it('should initiate willDelete', () => {
    currentList.push(item1)
    packet = changePacket(1, newList, currentList)
    expect(packet.willDelete).toBe(true)
    expect(packet.deletePacket.items[0]).toEqual(item1.id)
  })
})