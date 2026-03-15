const onLoad = () => {
  const body = document.querySelector('body')

  //

  const showCatalogSubmenuItems = document.querySelectorAll(
    '[data-action="show-catalog-submenu"]'
  )

  const onClickShowCatalogSubmenuItems = (event) => {
    console.log(event.target, event.currentTarget)
    //
    if (event.currentTarget.getAttribute('show'))
      event.currentTarget.removeAttribute('show')
    else event.currentTarget.setAttribute('show', true)
  }

  showCatalogSubmenuItems.forEach((item) => {
    item.addEventListener('click', onClickShowCatalogSubmenuItems)
  })

  const mobileCatalog = document.querySelector('[data-menu="mobile-catalog"]')

  const buttonOpenMobileCatalog = document.querySelector(
    '[data-action="open-mobile-catalog"]'
  )
  const buttonCloseMobileCatalog = document.querySelector(
    '[data-action="close-mobile-catalog"]'
  )

  const onClickButtonOpenMobileCatalog = (event) => {
    buttonOpenMobileCatalog.setAttribute('hidden', 'true')
    buttonCloseMobileCatalog.removeAttribute('hidden')
    mobileCatalog.removeAttribute('hidden')
  }

  buttonOpenMobileCatalog.addEventListener(
    'click',
    onClickButtonOpenMobileCatalog
  )

  const onClickButtonCloseMobileCatalog = () => {
    buttonCloseMobileCatalog.setAttribute('hidden', true)
    buttonOpenMobileCatalog.removeAttribute('hidden')
    mobileCatalog.setAttribute('hidden', true)
  }

  buttonCloseMobileCatalog.addEventListener(
    'click',
    onClickButtonCloseMobileCatalog
  )

  //

  const buttonMobileClose = document.querySelector('.mobile__close')

  const onClickButtonMobileClose = () => {
    body.classList.remove('body--overflow')
    document.querySelector('.mobile').setAttribute('hidden', true)
  }

  buttonMobileClose?.addEventListener('click', onClickButtonMobileClose)

  //

  const buttonMobileMenu = document.querySelector('.header__mobile-menu-button')

  const onClickButtonMobileMenu = () => {
    body.classList.add('body--overflow')
    document.querySelector('.mobile').removeAttribute('hidden')
  }

  buttonMobileMenu?.addEventListener('click', onClickButtonMobileMenu)

  const buttonMobileSearch = document.querySelector(
    '.header__mobile-search-button'
  )

  const onClickButtonMobileSearch = () => {
    body.classList.add('body--overflow')
  }

  buttonMobileSearch?.addEventListener('click', onClickButtonMobileSearch)

  //

  const onClickBody = (event) => {
    if (event.target.classList.contains('body--overflow')) {
      if (!document.querySelector('.panel.catalog').getAttribute('hidden')) {
        document.querySelector('.panel.catalog').setAttribute('hidden', true)
        body.classList.remove('body--overflow')
      }
    }
  }

  body.addEventListener('click', onClickBody)

  //

  const listProductTabsButtons = document.querySelectorAll(
    '.product__tabs-button'
  )

  const onClickTabButton = (event) => {
    if (
      event.currentTarget.classList.contains('product__tabs-button--active')
    ) {
      //
    } else {
      const tabButton = event.currentTarget

      document
        .querySelector('.product__tabs-button.product__tabs-button--active')
        .classList.remove('product__tabs-button--active')
      document
        .querySelector('.product__tab--show')
        .classList.remove('product__tab--show')

      const tab = tabButton.dataset?.tab

      console.log(tab)

      document.querySelector(`#${tab}`).classList.add('product__tab--show')
      tabButton.classList.add('product__tabs-button--active')
    }
  }

  listProductTabsButtons?.forEach((tabButton) => {
    tabButton.addEventListener('click', onClickTabButton)
  })

  //
  var thumbs = new Swiper('.product__swiper-thumbs', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  })

  var productSwiper = new Swiper('.product__swiper', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.product__swiper-button-next',
      prevEl: '.product__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs,
    },
  })

  //

  const listQuantities = document.querySelectorAll('.quantity')

  listQuantities?.forEach((quantity) => {
    const minus = quantity.querySelector('.quantity__minus')
    const plus = quantity.querySelector('.quantity__plus')
    const input = quantity.querySelector('.quantity__input')

    const onClickMinus = () => {
      if (input?.value > 0) {
        input.value = +input.value - 1
      }
    }

    const onClickPlus = () => {
      input.value = +input.value + 1
    }

    minus.addEventListener('click', onClickMinus)
    plus.addEventListener('click', onClickPlus)
  })

  //

  const catalogButtonClose = document.querySelector('.catalog__button-close')

  const buttonCatalog = document.querySelector('.button--catalog')

  const onClickButtonCatalog = () => {
    //
    document.querySelector('.panel.catalog').removeAttribute('hidden')
    body.classList.add('body--overflow')
  }

  buttonCatalog?.addEventListener('click', onClickButtonCatalog)

  const onClickCatalogButtonClose = () => {
    //
    document.querySelector('.panel.catalog').setAttribute('hidden', true)
    body.classList.remove('body--overflow')
  }

  catalogButtonClose?.addEventListener('click', onClickCatalogButtonClose)

  const listCatalogMenuItems = document.querySelectorAll('.catalog__menu-item')

  const onClickCatalogMenuItem = (event) => {
    //

    if (event.currentTarget.classList.contains('catalog__menu-item--active')) {
      //  event.currentTarget.classList.remove('catalog__menu-item--active')
    } else {
      document
        .querySelector('.catalog__menu-item.catalog__menu-item--active')
        ?.classList.remove('catalog__menu-item--active')
      event.currentTarget.classList.add('catalog__menu-item--active')
    }
  }

  listCatalogMenuItems?.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', onClickCatalogMenuItem)
  })
}

document.addEventListener('DOMContentLoaded', onLoad)
