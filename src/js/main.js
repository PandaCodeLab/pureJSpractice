import './slider'
import { $ } from './core/Dom'
import { Modal } from './modules/modals'

window.addEventListener('DOMContentLoaded', () => {
  const $triggers = $('.popup_engineer_btn')
  const $modal = $('.popup_engineer')
  const $close = $('.popup_engineer .popup_close')

  const modal_engineer = new Modal($triggers, $modal, $close)
  setTimeout(() => {
    modal_engineer.open()
  }, 60000)

  new Modal($('.phone_link'), $('.popup'), $('.popup .popup_close'))
})
