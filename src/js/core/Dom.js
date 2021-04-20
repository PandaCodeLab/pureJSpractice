class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === 'string' ? this.domQuerySelector(selector) : selector

    return this.$el
  }

  domQuerySelector(selector) {
    let domQuerySelector = document.querySelectorAll(selector)
    if (domQuerySelector.length === 1) {
      return domQuerySelector[0]
    }
    return domQuerySelector
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.addEL = ($el, typeOfEvent, cb) => {
  if ($el.length > 1) {
    $el.forEach((el) => {
      el.addEventListener(typeOfEvent, (e) => {
        cb(e)
      })
    })
  } else {
    $el.addEventListener(typeOfEvent, (e) => {
      cb(e)
    })
  }
}
