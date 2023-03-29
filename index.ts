import server from "./src/app";

// const { PORT } = process.env;
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Listening at Port: '${PORT}'`); // eslint-disable-line no-console
});
