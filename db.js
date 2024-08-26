import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
let connection;


const dbConnect = async () => {
	try {
		if (!connection) {
			connection = await mysql.createConnection({
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				database: process.env.DB_DATABSE,
				port: process.env.DB_PORT,
				password: process.env.DB_PASSWORD,
			});
			console.log("databse connect sucessfull");
		}

		return connection;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export default dbConnect;
