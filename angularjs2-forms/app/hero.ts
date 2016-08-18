
/**
	创建对象
	?表示为可省略
*/
export class Hero {
 
	constructor(
		public id: number,
		public name: string,
		public power: string,
		public alterEgo?: string
	){}
}