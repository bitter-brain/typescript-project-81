import Tag from './tag.js'

const HexletCode = {
  formFor: (template: Record<string, string>, options: Record<string, string> = {}, callback?: (f: any) => void) => {
    const action = options.url ?? '#'
    const formAttrs = { action, method: 'post' }
    return new Tag('form', formAttrs).toString()
  }
}
const template = { name: 'rob', job: 'hexlet', gender: 'm' }
console.log(HexletCode.formFor(template, {}, (f) => {}))
export default HexletCode
