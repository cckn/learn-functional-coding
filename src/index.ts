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
