import { expect, test } from 'vitest'
import Tag from '../tag'

test('Tag', () => {
  const file = new Tag('br')
  expect(file.toString()).toBe('<br>')

  const file2 = new Tag('img', { src: 'path/to/image' })
  expect(file2.toString()).toBe('<img src="path/to/image">')

  const file3 = new Tag('input', { type: 'submit', value: 'Save' })
  expect(file3.toString()).toBe('<input type="submit" value="Save">')

  const file4 = new Tag('label', {}, 'Email')
  expect(file4.toString()).toBe('<label>Email</label>')

  const file5 = new Tag('label', { for: 'email' }, 'Email')
  expect(file5.toString()).toBe('<label for="email">Email</label>')

  const file6 = new Tag('div')
  expect(file6.toString()).toBe('<div></div>')
})

