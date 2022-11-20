interface Item {
	name: string
	price: number
}

type Cart = Item[]

interface Button {
	item: {price: number}
	show_free_shipping_icon: () => void
	hide_free_shipping_icon: () => void
}

let shopping_cart: Cart = [] // A
let shopping_cart_total: number = 0 // A

// A
function add_item_to_cart(item: Item) {
	shopping_cart = add_item(shopping_cart, item) // A
	shopping_cart_total += item.price // A
}

// C
function add_item(cart: Cart, item: Item) {
	const new_cart = cart.slice()
	new_cart.push(item)
	return new_cart
}

// A
function calc_cart_total() {
	shopping_cart_total = calc_total(shopping_cart)

	set_cart_total_dom()
	update_shipping_icons()
	update_tax_dom()
}

// C
function calc_total(cart: Cart) {
	let total = 0
	total = cart.reduce((prev, item) => prev + item.price, 0)
	return total
}

// A
function set_cart_total_dom() {
	console.log(`Total: ${shopping_cart_total}`)
}

// A
function update_shipping_icons() {
	const buy_buttons = [] as Button[]
	for (let i = 0; i < buy_buttons.length; i++) {
		const button = buy_buttons[i]
		const item = button.item
		if (gets_free_shipping(shopping_cart_total, item.price)) {
			button.show_free_shipping_icon()
		} else {
			button.hide_free_shipping_icon()
		}
	}
}

// C
function gets_free_shipping(total: number, price: number) {
	return total + price >= 20
}

// A
function update_tax_dom() {
	const tax = calc_tax(shopping_cart_total)
	set_tax_dom(tax)
}

// C
function calc_tax(total: number): number {
	return total * 0.1
}

// C
function set_tax_dom(tax: number) {
	console.log(`Tax: ${tax}`)
}

add_item_to_cart({name: 'T-Shirt', price: 10})
add_item_to_cart({name: 'Jeans', price: 20})
calc_cart_total()
