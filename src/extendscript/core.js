/**
* adds expression to selected properties.
*/
function addExpression(expression) {
	app.beginUndoGroup("My Script Action");
	var selectedProperties = app.project.activeItem.selectedProperties;

	if (selectedProperties.length == 0) {
		alert("Please select a property");
	} else {
		for (var i = 0; i < selectedProperties.length; i++) {
			selectedProperties[i].expression = expression;
		}
	}
	app.endUndoGroup();
}
