const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The entry point file described above
  entry:{
     index:'./src/index.js',
    /*  mainpage:'./src/mainpage.js',
      loadPartsDetail:'./src/loadPartsDetail.js',
      userSettings:'./src/usersettings',
      materialStocks:'./src/materialStocks.js',
      userProfile:'./src/userProfile.js',
      resetPassword:'./src/resetPassword.js',*/
  }, 
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
      clean:true,
  },
    optimization:{
        splitChunks:{
            chunks:'all'   
        },
    },
    plugins:[
      /*new HtmlWebpackPlugin({
          filename:'index.html',
          title: 'Login Template',
          chunks:['index'],
          template:'./src/asset/index.html'
      }),
        new HtmlWebpackPlugin({
            filename:'mainpage.html',
            title:'Main Page',
            chunks:['mainpage'],
            template:'./src/asset/mainpage.html'
        }),
        new HtmlWebpackPlugin({
            filename:'partsdetail.html',
            title:'parsDetail',
            chunks:['loadPartsDetail'],
            template:'./src/asset/partsdetail.html',
        }),
        new HtmlWebpackPlugin({
            filename:'usersettings.html',
            title:'usersettings',
            chunks:['userSettings'],
            template:'./src/asset/usersettings.html',
        }),
        new HtmlWebpackPlugin({
           filename:'materialStocks.html' ,
            title:'materialStocks',
            chunks:['materialStocks'],
            template:'./src/asset/materialStocks.html',
        }),
        new HtmlWebpackPlugin({
           filename:'userProfile.html',
            title:'userProfile',
            chunks:['userProfile'],
            template:'./src/asset/userProfile.html',
        }),
        new HtmlWebpackPlugin({
           filename:'resetpassword.html',
            title:'resetPassword',
            chunks:['resetPassword'],
            template:'./src/asset/resetpassword.html',
        }),*/
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader:'file-loader',
                    },
                ],
                
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',  
            },
            {
                test: /\.svg$/,
                use:[
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                    ],
            },
        ],
    },
  devtool: 'eval-source-map',
};