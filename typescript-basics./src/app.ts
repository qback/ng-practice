import { generateRandomId, OptionsConfig, ValidSymbol } from "./utils";
import { identity } from "./misc";

class App {
	static id = 'app'; // то же что и App.id, a не (new App()).id !!! 
	onInit(el: HTMLElement | null): void {
		setInterval(function () {
			if (el) {
				el.innerHTML = generateRandomId({
					symbol: '#',
					length: 7
				});
			}
		}, 1000);
	}
}

function main(componentClass) {
	const app = document.getElementById(componentClass.id);
	const cmp = new componentClass();
	cmp.onInit(app);
}

identity<string>('Опаньки');
// identity<string>(1); //ошибка!
main(App);