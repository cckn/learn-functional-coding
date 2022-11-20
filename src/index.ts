interface Button {
	item: {price: number}
	show_free_shipping_icon: () => void
	hide_free_shipping_icon: () => void
}

let shopping_cart = [] // A
let shopping_cart_total = 0 // A

// A
function add_item_to_cart(name, price) {
	shopping_cart.push({name, price})
	shopping_cart_total += price
}

// A
function calc_cart_total() {
	calc_total()

	set_cart_total_dom()
	update_shipping_icons()
	update_tax_dom()
}

// 1. Refactoring
// 2. 암시적 입출력 찾기
// 3. 암시적 입출력을 명시적 입출력으로 바꾸기
function calc_total() {
	shopping_cart_total = 0 // 암시적 입력
	for (let i = 0; i < shopping_cart.length; i++) {
		const item = shopping_cart[i]
		shopping_cart_total += shopping_cart[i] // 암시적 출력
	}
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
		if (item.price + shopping_cart_total >= 20) {
			button.show_free_shipping_icon()
		} else {
			button.hide_free_shipping_icon()
		}
	}
}

// update tax
// A
function update_tax_dom() {
	set_tax_dom(shopping_cart_total * 0.1)
}

// C
function set_tax_dom(tax: number) {
	console.log(`Tax: ${tax}`)
}

calc_cart_total()
