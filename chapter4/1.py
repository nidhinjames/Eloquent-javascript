
function range(start, end) {
	repo = [];
	for (var i = start; i <= end; i++) {
		 repo.push(i);                                                                  
					   }						
		return repo;
			  
			   }
function sum(i) {
			total = 0;
			for(var i in repo) {
				total = total + repo[i];
				      }
			return total;
		}
		
console.log(sum(range(1,5)))


