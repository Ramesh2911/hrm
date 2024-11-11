import mysql from 'mysql2/promise';

let con;

try {
   con = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'hrm',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
   });

   console.log("Database connection pool created successfully");
} catch (error) {
   console.error("Error creating database connection pool:", error);
}

export default con;
