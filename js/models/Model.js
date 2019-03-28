class Model {
  constructor() {
    this.data = []
    this.list()
  }

  list() {
    const storageLength = localStorage.length

    if (storageLength) {
      for (let i = 0; i < storageLength; i++) {
        const key = localStorage.key(i)
        this.data.push({
          key: key,
          item: localStorage.getItem(key)
        })
      }
    }

    return this.data
  }

  add(key, text) {
    if(!key) return

    if(this.data.some(item => item.key === key)) {
      this.remove(key)
    }

    this.data = [{ key, text }, ...this.data]
    localStorage.setItem(key, text)
  }

  remove(key) {
    this.data = this.data.filter(item => item.key !== key)
    localStorage.removeItem(key)
  }
}

export default Model