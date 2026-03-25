const onLoad = () => {
  const body = document.querySelector('body')

  //

  const showCatalogSubmenuItems = document.querySelectorAll(
    '[data-action="show-catalog-submenu"]'
  )

  const onClickShowCatalogSubmenuItems = (event) => {
    // console.log(event.target, event.currentTarget)
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
    buttonOpenMobileCatalog?.setAttribute('hidden', 'true')
    buttonCloseMobileCatalog?.removeAttribute('hidden')
    mobileCatalog?.removeAttribute('hidden')
  }

  buttonOpenMobileCatalog?.addEventListener(
    'click',
    onClickButtonOpenMobileCatalog
  )

  const onClickButtonCloseMobileCatalog = () => {
    buttonCloseMobileCatalog?.setAttribute('hidden', true)
    buttonOpenMobileCatalog?.removeAttribute('hidden')
    mobileCatalog?.setAttribute('hidden', true)
  }

  buttonCloseMobileCatalog?.addEventListener(
    'click',
    onClickButtonCloseMobileCatalog
  )

  //

  const buttonMobileClose = document.querySelector('.cems-mobile__close')

  const onClickButtonMobileClose = () => {
    body.classList.remove('body--overflow')
    document.querySelector('.cems-mobile')?.setAttribute('hidden', true)
  }

  buttonMobileClose?.addEventListener('click', onClickButtonMobileClose)

  //

  const buttonMobileMenu = document.querySelector(
    '.cems-header__mobile-menu-button'
  )

  const onClickButtonMobileMenu = () => {
    body.classList.add('body--overflow')
    document.querySelector('.cems-mobile')?.removeAttribute('hidden')
  }

  buttonMobileMenu?.addEventListener('click', onClickButtonMobileMenu)

  const buttonMobileSearch = document.querySelector(
    '.cems-header__mobile-search-button'
  )

  const onClickButtonMobileSearch = () => {
    body.classList.add('body--overflow')
  }

  buttonMobileSearch?.addEventListener('click', onClickButtonMobileSearch)

  //

  const onClickBody = (event) => {
    if (event.target.classList.contains('body--overflow')) {
      if (
        !document.querySelector('.cems-panel.catalog')?.getAttribute('hidden')
      ) {
        document
          .querySelector('.cems-panel.catalog')
          ?.setAttribute('hidden', true)
        body.classList.remove('body--overflow')
      }
    }
  }

  body.addEventListener('click', onClickBody)

  //

  const listProductTabsButtons = document.querySelectorAll(
    '.cems-product__tabs-button'
  )

  const onClickTabButton = (event) => {
    if (
      event.currentTarget.classList.contains(
        'cems-product__tabs-button--active'
      )
    ) {
      //
    } else {
      const tabButton = event.currentTarget

      document
        .querySelector(
          '.cems-product__tabs-button.cems-product__tabs-button--active'
        )
        ?.classList.remove('cems-product__tabs-button--active')
      document
        .querySelector('.cems-product__tab--show')
        ?.classList.remove('cems-product__tab--show')

      const tab = tabButton.dataset?.tab

      // console.log(tab)

      document
        .querySelector(`#${tab}`)
        ?.classList.add('cems-product__tab--show')
      tabButton.classList.add('cems-product__tabs-button--active')
    }
  }

  listProductTabsButtons?.forEach((tabButton) => {
    tabButton.addEventListener('click', onClickTabButton)
  })

  //

  const listQuantities = document.querySelectorAll('.cems-quantity')

  listQuantities?.forEach((quantity) => {
    const minus = quantity.querySelector('.cems-quantity__minus')
    const plus = quantity.querySelector('.cems-quantity__plus')
    const input = quantity.querySelector('.cems-quantity__input')

    const onClickMinus = () => {
      if (input?.value > 0) {
        input.value = +input.value - 1
      }
    }

    const onClickPlus = () => {
      input.value = +input.value + 1
    }

    minus?.addEventListener('click', onClickMinus)
    plus?.addEventListener('click', onClickPlus)
  })

  //

  const catalogButtonClose = document.querySelector(
    '.cems-catalog__button-close'
  )

  const buttonCatalog = document.querySelector('.cems-button--catalog')

  const onClickButtonCatalog = () => {
    //
    document
      .querySelector('.cems-panel.cems-catalog')
      ?.removeAttribute('hidden')
    body.classList.add('cems-body--overflow')
  }

  buttonCatalog?.addEventListener('click', onClickButtonCatalog)

  const onClickCatalogButtonClose = () => {
    //
    document
      .querySelector('.cems-panel.cems-catalog')
      ?.setAttribute('hidden', true)
    body.classList.remove('cems-body--overflow')
  }

  catalogButtonClose?.addEventListener('click', onClickCatalogButtonClose)

  const listCatalogMenuItems = document.querySelectorAll(
    '.cems-catalog__menu-item'
  )

  const onClickCatalogMenuItem = (event) => {
    //

    if (
      event.currentTarget.classList.contains('cems-catalog__menu-item--active')
    ) {
      //  event.currentTarget.classList.remove('catalog__menu-item--active')
    } else {
      document
        .querySelector('.cems-catalog__menu-item.catalog__menu-item--active')
        ?.classList.remove('cems-catalog__menu-item--active')
      event.currentTarget.classList.add('cems-catalog__menu-item--active')
    }
  }

  listCatalogMenuItems?.forEach((item) => {
    // console.log(item)
    item.addEventListener('click', onClickCatalogMenuItem)
  })

  //
  var thumbs = new Swiper('.cems-product__swiper-thumbs', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  })

  var productSwiper = new Swiper('.cems-product__swiper', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.cems-product__swiper-button-next',
      prevEl: '.cems-product__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs,
    },
  })
}

document.addEventListener('DOMContentLoaded', onLoad)
