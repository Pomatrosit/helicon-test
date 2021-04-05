export function prettifyPrice(num) {
  const n = num.toString()
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}

export function productsToHtml (obj, root) {
  Object.keys(obj).forEach(product => {
    const card = `
     <div class="col-lg-4 col-sm-12 col-md-6 mb-3">
       <div class="card product-card js-product-card" data-id="${product}">
         <div class="card-body">
          <h5 class="product-card__title mb-5">${obj[product].name}</h5>
          <p class="product-card__price mb-2">Цена: ${prettifyPrice(obj[product].price)} руб.</p>
          <a href="#" class="btn btn-primary product-card__btn add-to-cart-btn">Добавить в корзину</a>
         </div>
       </div>
     </div>
    `
    root.insertAdjacentHTML('beforeend', card)
  })
}
