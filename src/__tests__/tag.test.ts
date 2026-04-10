import { expect, test } from 'vitest'
import Tag from '../tag'

test('Tag', () => {
  const file = new Tag('br')

  expect(file.toString()).toBe('<br>')

})