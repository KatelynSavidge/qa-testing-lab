const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('returnTwo', () => {
      expect(returnTwo()).toBe(2)
    })
test('greeting', () => {
      expect(greeting('James')).toBe('Hello James')
    })
test('greeting', () => {
      expect(greeting('Jill')).toBe('Hello Jill')
    })
test('add', () => {
      expect(add(1,2)).toBe(3)
    })
test('add', () => {
      expect(add(5,9)).toBe(14)
    })

