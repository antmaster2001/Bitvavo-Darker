//Hope you like bitvavo darker to spare your eyes :)
//socials: antmaster2001

let observer = new MutationObserver(function (mutations) {
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
	changeLogo();
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

const changeLogo = () => {
	const logo = document.getElementsByClassName("logo")[0];
	logo.style = 'background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318.01%2050.15%22%3E%3Cdefs%3E%3Cstyle%3E.a%2C.b%7Bfill%3A%23fff%3B%7D.b%7Bfill-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22a%22%20d%3D%22M102%2C14.57a17.69%2C17.69%2C0%2C0%2C0-10.16%2C3.2V0H84.18V50.11h7.61V46.92A17.77%2C17.77%2C0%2C1%2C0%2C102%2C14.57Zm0%2C27.93A10.15%2C10.15%2C0%2C1%2C1%2C112.1%2C32.34%2C10.16%2C10.16%2C0%2C0%2C1%2C102%2C42.5Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M126.5%2C14.57h7.62V50.11H126.5Zm0-11.42h7.62v7.62H126.5Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M163.24%2C42.5h-5.9c-2.11%2C0-3.37-1.71-3.37-3.81V22.19h10.58l-2.68-7.61H154V4.35L146.34%2C7v7.54h-6.29v7.61h6.31v19a8.87%2C8.87%2C0%2C0%2C0%2C8.88%2C8.88h8Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M195.14%2C14.58%2C184.92%2C40.73%2C174.7%2C14.58h-7.61L181%2C50.11h7.92l13.88-35.53Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M222.24%2C42.5A10.15%2C10.15%2C0%2C1%2C1%2C232.4%2C32.34%2C10.15%2C10.15%2C0%2C0%2C1%2C222.24%2C42.5ZM232.4%2C17.77a17.77%2C17.77%2C0%2C1%2C0-2.62%2C30.66%2C18%2C18%2C0%2C0%2C0%2C2.62-1.51v3.19H240V14.57H232.4Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M280.75%2C14.57h-7.61L262.92%2C40.72%2C252.71%2C14.57h-7.62L259%2C50.11h7.9Z%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M300.24%2C42.5a10.15%2C10.15%2C0%2C1%2C1%2C10.15-10.16A10.15%2C10.15%2C0%2C0%2C1%2C300.24%2C42.5Zm0-27.93A17.77%2C17.77%2C0%2C1%2C0%2C318%2C32.34a17.77%2C17.77%2C0%2C0%2C0-17.77-17.77Z%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M27.94%2C3.28H46.88L18.94%2C50.15H0Z%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M45.32%2C26.56H64.26l-14%2C23.59H31.35Z%22%2F%3E%3Cdiv%20xmlns%3D%22%22%20id%3D%22divScriptsUsed%22%20style%3D%22display%3A%20none%22%2F%3E%3Cscript%20xmlns%3D%22%22%20id%3D%22globalVarsDetection%22%20src%3D%22chrome-extension%3A%2F%2Fcmkdbmfndkfgebldhnkbfhlneefdaaip%2Fjs%2Fwrs_env.js%22%2F%3E%3C%2Fsvg%3E)!important';
}