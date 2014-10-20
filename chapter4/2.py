// reversing an array using for loop
function reverse(array) {
	new_array = [];
	console.log("The array is ::" + array);
	for (var i = array.length - 1; i >=0; i--) {
		new_array.push((array[i]));
				
			}
	return new_array;
			}

console.log(reverse([1,2,3,4,5]))
