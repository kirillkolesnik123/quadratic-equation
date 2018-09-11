module.exports = function solveEquation(equation) {
  // your implementation
   let data = equation.split(' ');
	
    let a = Number(data[0]);
    
    let b = Number(data[3] + data[4]);
    
    let c = Number(data[7] + data[8]);
    

    let d = (data[3] + data[4])*(data[3] + data[4]) - 4*(data[0] * (data[7] + data[8]));
       
    var x1 = Math.round((-b + Math.sqrt(d))/(2*a));
    
    var x2 = Math.round((-b - Math.sqrt(d))/(2*a));
    

   let arr = [x1, x2];
   
   function sortab(a,b ) {
       return a - b;
   }

   return arr.sort(sortab);
}
