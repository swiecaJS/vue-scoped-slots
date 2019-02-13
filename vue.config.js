module.exports = {
  // configureWebpack: conf => {
  //   console.log(conf);
  //   conf.entry["app"].push(
  //     require.resolve(`webpack-dev-server/client`) + "?http://192.168.1.100:80"
  //   );
  // },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true, // process.env.NODE_ENV === 'development'
    // https: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    useLocalIp: false
  }
};
