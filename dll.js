export const insert = async (connection, tableName, values) => {
	
	try {
		const insertQueryPromises = values.map((item) => {
			let colName = "";
			let values = "";

			const colNameArray = Object.keys(item);
			const valuArray = Object.values(item);

			colNameArray.map((col, i) => {
				if (i == colNameArray.length - 1) colName += `${col}`;
				else colName += `${col},`;
			});

			valuArray.map((val, i) => {
				if (i == valuArray.length - 1) {
					if (typeof val == "number") values += `${val}`;
					else values += `"${val}",`;
				} else {
					if (typeof val == "number") values += `${val},`;
					else values += `"${val}",`;
				}
			});


		// make a query request

			return connection.query(
				`insert into ${tableName} (${colName}) values (${values})`,
			);
		});

		const res = await Promise.all(insertQueryPromises);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};

export const get = async (connection, tableName) => {
	try {
		const sql = `select * from ${tableName}`;


		// make a query request
		const [result, info] = await connection.query(sql);
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const Delete = async (connection, tableName, values) => {
	try {
		let deleteCondition = "";

		const colNameArray = Object.keys(values);
		const valuArray = Object.values(values);

		for (let i = 0; i < colNameArray.length; i++) {
			if (i == colNameArray.length - 1) {
				deleteCondition += `${colNameArray[i]}=${
					typeof valuArray[i] == "number"
						? valuArray[i]
						: `"${valuArray[i]}"`
				}`;
			} else {
				deleteCondition += `${colNameArray[i]}=${
					typeof valuArray[i] == "number"
						? valuArray[i]
						: `"${valuArray[i]}"`
				} AND `;
			}
		}


		// make a query request
		await connection.query(
			`delete from ${tableName} where ${deleteCondition}`,
		);
		console.log("rows deleted.....");


	} catch (err) {
		console.log(err);
	}
};
