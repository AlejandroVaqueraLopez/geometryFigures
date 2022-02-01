var salaryList = []
var stHalfSalary = 0;
var ndHalfSalary = 0;
var mxMediumTop = 0;
var colMediumTop = 0;
var mxTopSalary = 0;
var colTopSalary = 0;
var start = 0;
var end = 0;
var spliceCount = 0;
var start = 0;
var res = 0;

//sorting
mxSalaries = mxSalaries.sort((a,b) => {
    return a-b;//it returns the right order of every list
});
colSalaries = colSalaries.sort((a,b) => {
    return a-b;//it returns the right order of every list
});
//pair or impair
function isPair(myArray){
    return (myArray.length%2 == 0);
}
//medium
function medium(salaryList){
    stHalfSalary = 0;
    ndHalfSalary = 0;
    if(isPair(salaryList)){
        stHalfSalary = salaryList[(salaryList.length/2)-1];
        ndHalfSalary = salaryList[(salaryList.length)-1];
        return (stHalfSalary+ndHalfSalary)/2;
    }else{
        stHalfSalary = salaryList[(salaryList.length-1)/2];
        return stHalfSalary;
    }
}

function topSalaryArray(sortedSalaryList){
    spliceCount = 0;
    start = 0;
    res = 0;
    start = (90 * sortedSalaryList.length) / 100; //calculate 90%
    spliceCount = sortedSalaryList.length - start;

    res = sortedSalaryList.splice(start,spliceCount)
    console.log(start,spliceCount,res);
    
    return res;
}

mxMediumTop = medium(topSalaryArray(mxSalaries));
colMediumTop = medium(topSalaryArray(colSalaries));
console.log('the medium of the top 10 of mx salaries: ',mxMediumTop);
console.log('the medium of the top 10 of col salaries: ',colMediumTop);



