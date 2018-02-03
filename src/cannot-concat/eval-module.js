import multipleImported from './multiple-imported';

/* eslint no-eval: 0 */
const func = () => eval('console.log("this is ES6 module with eval."); multipleImported();');

export default func;
