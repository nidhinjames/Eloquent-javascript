/* chess board hard version */
total = " "
for (var i = 1; i <= 8 ; i += 1) {
	for (var j = 1; j <= 8 ; j += 1) {
		if((i+j)%2 == 0) 
			{
			total = total + "#";
			}
			else
				{
				total = total + " ";
				}
					}
	total = total + "\n";
			

					 }
	console.log(total)
				

/* o/p of the above program 


 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #


*/       
