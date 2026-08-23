// ! comparison-operators 

// * == ამოწმებს მნიშვნელობას და არა ტიპიზაციას
// * != საპირისპირო მოქმედება 

// * === strict equality operator
// * ამოწმებს როგორც ტიპიზაციას ასევე მნიშვნელობას
// * !== საპირისპირო მოქმედება

// !  0 = 0
// !  false = 1 
// !  true = 1 
// !  null = -0
// !  '' = 0
// !  undefined = 0

// equality operators
console.log(1 == 1);
console.log(1 == '1');
console.log(true == 1);
console.log(false == 0);
console.log(null == undefined);
console.log('' == 0);

//  != non equality
console.log(1 != 1);
console.log(1 != '1');
console.log(true != 1);
console.log(false != 0);
console.log(null != undefined);
console.log('' != 0);

//  === strict equality
console.log(1 === 1);
console.log(1 === '1');
console.log(true === 1);
console.log(false === 0);
console.log(null === undefined);
console.log('' === 0);

// !== non strict equality
console.log(1 !== 1);
console.log(1 !== '1');
console.log(true !== 1);
console.log(false !== 0);
console.log(null !== undefined);
console.log('' !== 0);