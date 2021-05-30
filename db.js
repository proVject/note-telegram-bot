const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "d5mfq7pil5h12k",
  "wiheoraqjmgpeh",
  "4abe0e12b9df505460264bacbda449a78e199e22e230c5618fa4b1ca179b9761",
  {
    connectionString:
      "postgres://wiheoraqjmgpeh:4abe0e12b9df505460264bacbda449a78e199e22e230c5618fa4b1ca179b9761@ec2-3-233-7-12.compute-1.amazonaws.com:5432/d5mfq7pil5h12k",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    host: "ec2-3-233-7-12.compute-1.amazonaws.com",
    port: "5432",
    dialect: "postgres",
  }
);
