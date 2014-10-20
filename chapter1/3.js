/* first function count number of B's and Second function count a particular letter */
function countBs(str) {
cnt = 0;
for(var i =0; i <= str.length; i += 1) {
  if(str[i] == 'B') {
    cnt = cnt + 1;
  }
}
  console.log(cnt);
}  
function countChar(str, letter) {
cnt = 0;
for(var i =0; i <= str.length; i += 1) {
  if(str[i] == letter) {
    cnt = cnt + 1;
  }
}
  console.log(cnt);
  
}  
console.log(countBs("BBC"))
console.log(countChar("kottapally", 'k'))

