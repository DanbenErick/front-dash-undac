const path = require('path')
const HtmlWebpackPlugin = require('webpack-html-plugin')

module.exports = {
     entry: './src/index.js', // Ruta del archivo de entrada
     mode: 'production',
     output: {
          filename: 'bundle.js', // Nombre del archivo de salida
          path: path.resolve(__dirname, 'public/dist') // Ruta de salida
     },
     module: {
          rules: [
               {
                    test: /\.js$/, // Buscar archivos JavaScript
                    exclude: /node_modules/, // Excluir la carpeta node_modules
                    use: {
                         loader: 'babel-loader', // Usar Babel para transpilar JavaScript
                         options: {
                              presets: ['@babel/preset-env']
                         }
                    }
               },
               {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
               },
          ]
     }
}
