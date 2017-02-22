// getTriangleArea function

var triangleArea1 = getTriangleArea(0, 15),
		triangleArea2 = getTriangleArea(24, 32),
		triangleArea3 = getTriangleArea(74, -5);

function getTriangleArea(a, h) {

	if ((a > 0) && (h > 0)) {
		console.log('Pole trójkąta wynosi: ' + ((a * h) / 2));

	} else {
			console.log('Nieprawidłowe dane.');
	}
};


