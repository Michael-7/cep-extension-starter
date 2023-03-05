var CSLibrary = new CSInterface();

export function applyExpression() {
	CSLibrary.evalScript('addExpression("loopOut();")');
}
