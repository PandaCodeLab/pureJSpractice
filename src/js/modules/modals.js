import { $ } from '../core/Dom'

export class Modal {
  constructor($el, $modal, $close, typeOfEvent = 'click') {
    this.$el = $el
    this.$modal = $modal
    this.$close = $close
    this.typeOfEvent = typeof typeOfEvent === 'string' ? typeOfEvent : null
    this.actions = {
      open: () => {
        this.$modal.style.display = 'block'
        document.body.classList.add('modal-open')
      },
      close: () => {
        this.$modal.style.display = 'none'
        document.body.classList.remove('modal-open')
      },
    }
    this.initDomListen()
  }

  open() {
    this.actions.open()
  }

  initDomListen() {
    $.addEL(this.$el, this.typeOfEvent, (e) => {
      e.preventDefault()
      this.actions.open()
    })

    $.addEL(this.$close, this.typeOfEvent, () => {
      this.actions.close()
    })

    $.addEL(this.$modal, this.typeOfEvent, (e) => {
      if (e.target === this.$modal) {
        this.actions.close()
      }
    })
  }
}
