function ArtCart({ item }) {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.title} />
        <div>
          <h4>{item.title}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default ArtCart;
  