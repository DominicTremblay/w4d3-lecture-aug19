const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
