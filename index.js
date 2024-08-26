import dbConnect from "./db.js";
import { Delete, get, insert } from "./dll.js";

dbConnect()
	.then(async(connection) => {

		insert into table
		const insetValues = [
			{ id: 1, first_name: "souvik", last_name: "ghosh", age: 20 },
			{
				id: 2,
				first_name: "ram",
				middle_name: "chandra",
				last_name: "ghosh",
				age: 23,
			},
			{
				id: 3,
				first_name: "sham",
				middle_name: "gopal",
				last_name: "das",
				age: 24,
			},
		];

		insert(connection,'student',insetValues)


		// get all data from table
		const rows=await get(connection,"student")
		console.log(rows)


		// delete row from table
		const deleteValues={id:1}
		Delete(connection,'student',deleteValues)

		
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
