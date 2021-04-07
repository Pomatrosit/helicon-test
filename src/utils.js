export function prettifyPrice(num) {
  const n = num.toString()
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}

export function productsToHtml (obj, root) {
  Object.keys(obj).forEach(product => {
    const card = `
     <div class="col-lg-4 col-sm-12 col-md-6 mb-3">
       <div class="product-card js-product-card" data-id="${product}">
         <div class="product-card__body">
          <h5 class="product-card__title">${obj[product].name}</h5>
          <img src="${obj[product].img}" alt="${obj[product].name}" class="product-card__img" />
          <p class="product-card__text">${obj[product].text}</p>
          <p class="product-card__price">${prettifyPrice(obj[product].price)} руб.</p>
          <a href="#" class="product-card__btn add-to-cart-btn"><span>Добавить в корзину</span></a>
         </div>
       </div>
     </div>
    `
    root.insertAdjacentHTML('beforeend', card)
  })
}
