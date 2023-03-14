var CSLibrary = new CSInterface();

export function applyExpression() {
	var expression = document.querySelector('#expressionInput').value;
	CSLibrary.evalScript(`addExpression("${expression}")`);
}
