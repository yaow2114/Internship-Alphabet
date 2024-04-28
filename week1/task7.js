// let promise = new Promise(((resolve, reject) => {
//     console.log('Step1');
//     resolve();
// }));

// promise.then(() => {
//     console.log('Step3');
// });

// console.log('Step2');
const logAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('小马哥'), 1000)
    })
}

const doSomething = async () => {
    const resolveValue = await logAsync();
    console.log(resolveValue);
}

console.log('before')
doSomething();
console.log('after')