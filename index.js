import { products } from './products'
import { productsToHtml, prettifyPrice } from './utils'

const cartNode = document.querySelector('.js-cart-price')
const catalog = document.querySelector('.js-catalog')

productsToHtml(products, catalog)

let cartPrice = 0

function addToCart (num) {
  cartPrice += num
  cartNode.innerHTML = `${prettifyPrice(cartPrice)} руб.`
}

catalog.addEventListener('click', e => {
  const btn = e.target.closest('.add-to-cart-btn')
  if (btn) {
    const id = btn.closest('.js-product-card').getAttribute('data-id')
    addToCart(+products[id].price)
    btn.classList.add('disabled')
    btn.innerHTML = "Товар добавлен в корзину"
  }
})
