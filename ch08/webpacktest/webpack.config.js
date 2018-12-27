var webpack = require('webpack');
module.exports = {
    entry: {
        main: __dirname + '/src/index.js'
    },
    // 처음 로드하는 파일을 지정한다. 진입 파일은 단일 파일로 지정할 수도 있고,
    // 여러 개의 파일을 지정할 수도 있다. 여러 개의 진입 파일을 지정할 때는 객체 형태로 지정하고
    // 단일 진입 파일일 때는 문자열로 파일의 경로를 지정한다.
    // [단일 진입 파일인 경우]
    // entry : __dirname + '/src/index.js'
    // [다중 진입 파일인 경우]
    // entry : {
    //    main : __dirname + '/src/index.js',
    //    app : __dirname + '/src/main.js'
    // }
    //프로젝트의 디렉터리(__dirname)와 문자열로 전달된 경로를 조합하여 경로를 지정한다.
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].js',
        publicPath: '/dist'
    },
    //번들링 된 결과물의 출력 방법을 지정한다. 
    //path 옵션은 번들링된 파일의 저장 경로입니다.
    //publicPath 옵션에는 웹서버에서 이용될 때의 사용 경로를 지정한다.
    //filename으로는 생성하는 파일의 파일명을 지정한다.
    //filename은 정적 문자열이 될 수도 있지만 entry 이름이 파일명에 반영되도록 '[name]'이라는 대체문자를 이용할수도 있다.
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    // 프로젝트 내부에서 사용하는 다양한 유형의 모듈을 수행하는 방법을 지정한다.
    // 특히 module옵션에서 가장 많이 설정하는 내용인 로더(loader)에 대해서는 ES2015를 이전 버전의 자바스크립트 코드로
    // 트랜스파일할 수 있도록 babel-loader를 사용하도록 작성해보았다.
    // module옵션에 rules 배열을 추가하고 규칙(rule)을 추가한다.
    // exclude에는 트랜스파일 대상에 포함시키지 않을 파일명의 정규식 패턴을 지정한다.
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    // plugins 옵션은 다양한 방법으로 webpack 빌드 프로세스에 사용자가 지정한 작업을 추가할 수 있는 기능을 제공한다.
    // 예를 들어 코드 난독화와 압축 기능을 제공하는 UglifyJsPlugin을 들 수 있다.
    devServer: {
        contentBase: './public',
        //contentBase 옵션은 웹서버 루트로 지정할 디렉터리 경로를 설정한다.
        //생략하면 프로젝트 디럭터리가 지정된다.
        port: 3000,
        //포트 번호를 지정하며 지정하지 않으면 기본값은 8080이다.
        historyApiFallback: true
            //브라우저에서 이전 상태로 이동하려할 때 존재하지 않으면 404에러가 발생한다.
            //이 경우에는 기본페이지(index.html)로 이동을 자동화시킬 것인지 여부를 지정한다.
    }
}
