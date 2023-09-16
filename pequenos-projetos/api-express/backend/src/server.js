const app = require('./app');
require('dotenv').config();

const PORT = process.env.MYSQL_PORT || 3333;

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
