const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") // Plugin para leitura do html
const CopyWebpackPlugin = require("copy-webpack-plugin")// Plugin para copia dos assets

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg")
    }), // Adicionando plugin para o carregamento do html no servidor
    
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets" ),
        }
      ]
    })
],

  module: {
    rules: [
      {
        test: /\.css$/, //aqui está sendo incluído todos os arquivos que termina com css
        use: ["style-loader", "css-loader"], // Carregando e ejetando o css na aplicação
      },
      {
        test: /\.js$/, // olhar para todos os aquivos js 
        exclude: /node_modules/, // tirando a node_modules da leitura
        use: {
          loader: "babel-loader", // entendendo a regra acima, irá ser utilizado o loader
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}