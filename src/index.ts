interface Button {
	item: {price: number}
	show_free_shipping_icon: () => void
	hide_free_shipping_icon: () => void
}

let shopping_cart = []
let shopping_cart_total = 0

function add_item_to_cart(name, price) {
	shopping_cart.push({name, price})
	shopping_cart_total += price
}

function calc_cart_total() {
	shopping_cart_total = 0
	for (let i = 0; i < shopping_cart.length; i++) {
		const item = shopping_cart[i]
		shopping_cart_total += shopping_cart[i]
	}
	set_cart_total_dom()
}

function set_cart_total_dom() {
	console.log(`Total: ${shopping_cart_total}`)
}

function update_shipping_icons() {
	const buy_buttons = [] as Button[]
	for (let i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i]
		const item = button.item
		if (item.price + shopping_cart_total >= 20) {
			button.show_free_shipping_icon()
		} else {
			button.hide_free_shipping_icon()
		}
	}
}
