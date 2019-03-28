import View from "./View.js"

class StickyMemoView extends View {
  constructor(el) {
    super(el)

    this.x = 0
    this.y = 0

    this.getMemoDom()
  }

  getMemoDom() {
    const html  = '<div class="sticky">' +
        '<nav class="top_nav">' +
        '<a href="#" class="add"><i class="fa fa-plus"></i></a>' +
        '<a href="#" class="save"><i class="fa fa-floppy-o"></i></a>' +
        '<div class="right">' +
        '<a href="#" class="get"><i class="fa fa-list"></i></a>' +
        '<a href="#" class="del"><i class="fa fa-times"></i></a>' +
        '</div>' +
        '</nav>' +
        '<textarea name="txt" class="txt"></textarea>' +
        '<nav class="side_nav"><ol></ol></nav>' +
        '</div>'

    const newMemoDom = document.createRange().createContextualFragment(html);

    newMemoDom.querySelector('.sticky').style.left = parseInt(this.x) + 'px'
    newMemoDom.querySelector('.sticky').style.top = this.y

    this.bindEvent(newMemoDom)

    this.el.appendChild(newMemoDom)
  }

  bindEvent(currentTarget) {
    currentTarget.querySelector('.add').addEventListener('click', this.addMemo.bind(this))
    currentTarget.querySelector('.save').addEventListener('click', this.saveMemo.bind(this, currentTarget.querySelector('.txt').value))
    currentTarget.querySelector('.del').addEventListener('click', this.deleteMemo.bind(this, currentTarget.querySelector('.sticky')))
    currentTarget.querySelector('.get').addEventListener('click', this.listMemo.bind(this, currentTarget.querySelector('.side_nav')))
  }

  addMemo() {
    this.renderMemoPosition()
    this.getMemoDom()
  }

  saveMemo(text) {
    if(text !== '') {
      const key = prompt('저장할 파일명?', '')
      this.emit('@save', {
        key: key,
        text: text
      })
    }
  }

  listMemo(targetEl) {
    this.toggleClass(targetEl, "active")
  }

  deleteMemo(currentTarget) {
    currentTarget.remove()
  }

  renderMemoPosition() {
    this.x = Math.random() * this.el.clientWidth - 250
    this.y = Math.random() * this.el.clientHeight - 300
  }
}

export default StickyMemoView
