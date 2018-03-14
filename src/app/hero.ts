export class Hero {


	constructor(

		public id: number,
		public name: string,
		public power: string,
		public alterEgo?: string


		)


	{}
}


/*
- the TypeScript generates a publci field for each public constructor parameter automatically assugnes the parameter's value to that field when you create heroes


alterEgo -> optional 

*/
