const enhancer = require('./enhancer.js');
// test away!

// repair
test("repairs item by increasing durability to 100", () => {
  currentItem = {name: 'item1', durability: 80, enhancement: 10}
  const updatedItem = enhancer.repair(currentItem)
  expect(updatedItem.durability).toBe(100)
})

// success
test("Success should update enhancement by 1 if enhancement is < 20", () => {
  currentItem = {name: 'item1', durability: 80, enhancement: 10}
  const updatedItem = enhancer.success(currentItem)
  expect(updatedItem.enhancement).toBe(11)
})

// fails
test("Users rules to update item. Currently durability will be changed base on enhancement", () => {
  currentItem = {name: 'item1', durability: 80, enhancement: 10}
  const updatedItem = enhancer.fail(currentItem)
  expect(updatedItem.durability).toBe(75)
})

// get
test("Adds enhancement to name if enhancement is > 0", () => {
  currentItem = {name: 'item1', durability: 80, enhancement: 10}
  const updatedItem = enhancer.get(currentItem)
  expect(updatedItem.name).toBe("[+10] item1")
})
