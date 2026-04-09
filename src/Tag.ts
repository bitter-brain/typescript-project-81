class Tag {

  constructor(public tag: string, public attr?: object, public label?: string) {}

  public toString() {
    return `<${this.tag}>`
  }

}

console.log(new Tag("br").toString())