const add = (a: number, b: number) => {
	return a + b;
};

//always use return type not rely on Inference for better checking in return
const substract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

//if want if checked use void instead of never
const throwError = (message: string): never => {
	throw new Error(message);
};
