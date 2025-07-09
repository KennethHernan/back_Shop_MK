import { connect } from 'mongoose';

export default (async () => {
  const loadingInterval = startLoading("Conectando a BD...");
  function startLoading(message) {
    const spinner = ["|", "/", "-", "\\"];
    let i = 0;
    return setInterval(() => {
      process.stdout.write(`\r${spinner[i++ % spinner.length]} ${message}`);
    }, 100);
  }

  try {
    const db = await connect("mongodb+srv://Kenneth:Kenneth2829@mayikh-style.n0wg4b0.mongodb.net/DB_Mayikh");

    clearInterval(loadingInterval);
    process.stdout.write(`\rConexión a MongoDB exitosa: [${db.connection.name}]\n`);
  } catch (error) {
    clearInterval(loadingInterval);
    process.stdout.write("\rError al conectar a MongoDB\n");
    console.error(error);
    process.exit(1);
  }
})();
