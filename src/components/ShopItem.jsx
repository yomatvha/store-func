export function ShopItem({param}) {
  return (
    <div class="main-content">
      <h2>{param.brand}</h2>
      <h1>{param.title}</h1>
      <h3>{param.description}</h3>
      <div class="description">
        {param.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{param.currency}{param.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}
