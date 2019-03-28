class View {
  constructor( el ) {
    if(!el) throw el
    this.el = el
  }

  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }

  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  }

  toggleClass(el, className) {
    el.classList.toggle(className)
  }
}

export default View