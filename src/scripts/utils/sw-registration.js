import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
 if ('serviceWorker' in navigator) {
  await runtime.register();
 }
 if ('serviceWorker' in navigator) {
  await runtime.register();
 }
};

export default swRegister;
