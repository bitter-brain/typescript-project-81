const selfClosingTags = ['input', 'br', 'img', 'hr', 'meta', 'link']

class Tag {
  constructor(public tag: string, public attr: Record<string, string> = {}, public label = '') {}

  public toString() {
    const attrString = Object.entries(this.attr)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')
    if (selfClosingTags.includes(this.tag)) {
      return attrString ? `<${this.tag} ${attrString}>` : `<${this.tag}>`
    }
    return attrString ? `<${this.tag} ${attrString}>${this.label}</${this.tag}>` : `<${this.tag}></${this.tag}>`
  }
}

export default Tag
