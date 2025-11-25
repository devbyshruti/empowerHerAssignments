function countCategories(categories){
    const result=categories.reduce((acc,category)=>{
        acc[category]=(acc[category] || 0) + 1;
        return acc;
    }, {});
    return result;
}
const arr=["electronics","clothing","electronics","toys","clothing","toys"];
console.log(countCategories(arr));