const app = require('../src/app');

// PONTO DE ALTERAÇÂO DE PORTA
const PORTA = "3000"
const port = normalizaPort(PORTA);


function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})
