import {expect, test} from 'vitest'
import HexletCode from '../index'

test('formFor', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }

  const form = HexletCode.formFor(template, {}, (f) => {})
  expect(form).toBe('<form action="#" method="post"></form>')

  const form2 = HexletCode.formFor(template, { url: '/users' }, (f) => {})
  expect(form2).toBe('<form action="/users" method="post"></form>')

})
