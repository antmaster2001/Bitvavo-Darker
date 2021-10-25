//Hope you like bitvavo darker to spare your eyes :)
//socials: antmaster2001

var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		if (mutation.addedNodes.length) {
			if (mutation.type == 'childList') {
				console.log(mutation.target.innerText);
			}
		}
	})
})

const checkNode = () => {
	let coinTable = document.querySelector("#app > div.full > div > div:nth-child(2) > div.currency-list > div.contentBlock > table > tbody")
	if (!coinTable) {
		window.setTimeout(checkNode, 500);
		return;
	}
	addToTableHead();
	advancedButtonAppend(coinTable);
	let config = {
		childList: true,
		subtree: true
	}
	observer.observe(coinTable, config)
}
checkNode();

const addToTableHead = () => {
	let tableHead = document.querySelector("#app > div.full > div > div:nth-child(2) > div.currency-list > div.contentBlock > table > thead > tr");
	let th = document.createElement("th");
	th.innerHTML = "ADV"
	tableHead.insertBefore(th, tableHead.cells[2])

}

const advancedButtonAppend = (coinTable) => {
	[...coinTable.rows].map((data, index) => {
		let ticker = data.childNodes[1].childNodes[2].innerHTML;
		let td = document.createElement("td");
		data.insertBefore(td, data.childNodes[2])
		let link = document.createElement("a");
		link.href = `https://account.bitvavo.com/markets/${ticker}-EUR`;
		link.innerHTML = "ADVANCED"
		link.className = "advanced_button"
		link.target = "_blank"
		data.childNodes[2].appendChild(link)
	})
}