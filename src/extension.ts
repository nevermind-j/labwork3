// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "labwork3" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('labwork3.joke', () => {
		let jokes: string[] = 
		["у физрука было 6 детей: первый, второй, первый, второй, первый, второй",
		"Карлик заходит в ресторан и заказывает пельмени. Съедает всю порцию. Официант увидев это, подходит к нему и спрашивает -добавки? -больше я уже не буду. -я знаю. добавки?",
		"Фальшивого дрессировщика быстро раскусили",
		"У сталина было 2 танка и он ездил на них по очереди. Очереди не нравилось, но она не расходилась.",
		"Рыбка утонула.",
		"Люди на железной дороге делятся на 2 типа",
		"Сын червячок спрашивает у мамы червячка: -а где папа? -с друзьями на рыбалке",
		"Электрик на соревнованиях по плаванию замкнул тройку лидеров.",
		"Блин - сказал медведь, наступив на колобка",
		"Наполеон тоже не сразу стал тортом",
		"Бабушка перешла дорогу не на тот свет"
		];
		let i = Math.floor(Math.random()*10);
		vscode.window.showInformationMessage(jokes[i]);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
