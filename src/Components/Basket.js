import React from "react";

function Basket(props) {
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const taxPrice = itemsPrice * 0.14;
	// need explanation
	const shippingPrice = itemsPrice > 2000 ? 0 : 50;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;
	return (
		<aside className="block col-1">
			<h2>Cart</h2>
			<div>
				{cartItems.length === 0 && <div> Cart is Empety </div>}
				{cartItems.map((item) => (
					<div key={item.id} className="row">
						<div className="col-2">{item.name}</div>
						<div className="col-2">
							<button onClick={() => onAdd(item)} className="add">
								+
							</button>
							<button onClick={() => onRemove(item)} className="remove">
								-
							</button>
						</div>
						<div className="col-2 text-right">
							{item.qty} x ${item.price}
						</div>
					</div>
				))}
			</div>
			{cartItems.length !== 0 && (
				<>
					<hr></hr>
					<div className="row">
						<div className="col-2">Items Price</div>
						<div className="col-1 text-right"> ${itemsPrice}</div>
					</div>
					<div className="row">
						<div className="col-2">Tax</div>
						<div className="col-1 text-right"> ${taxPrice}</div>
					</div>
					<div className="row">
						<div className="col-2">Shipping</div>
						<div className="col-1 text-right"> ${shippingPrice}</div>
					</div>
					<div className="row">
						<div className="col-2">
							<storng>Total Price </storng>
						</div>
						<div className="col-1 text-right"> ${totalPrice}</div>
					</div>
					<hr></hr>

					<div className="row">
						<button
							onClick={() => alert("Implemente Checkout some other times!")}
						>
							{" "}
							Checkout
						</button>
					</div>
				</>
			)}
		</aside>
	);
}

export default Basket;
