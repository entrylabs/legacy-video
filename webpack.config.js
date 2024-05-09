const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts', // 프로젝트의 엔트리 파일
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js', // 출력 파일
        library: {
            type: 'umd', // UMD 포맷 사용
            name: 'EntryVideoLegacy', // 전역 변수로 접근 가능한 라이브러리 이름 (선택적)
            export: 'default',
            umdNamedDefine: true, // AMD 환경에서도 이름이 있는 AMD 모듈로 정의
        },
        globalObject: 'this', // 유니버설 모듈 정의에 사용될 글로벌 객체
    },
    resolve: {
        fallback: {
            fs: false,
            path: false,
            crypto: false,
            buffer: false,
            perf_hooks: false,
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
        mainFields: ['jsnext:main', 'browser', 'main'],
    },
    module: {
        rules: [
            {
                test: /\.worker\.ts$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: 'no-fallback',
                    },
                },
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true, // 타입 체크 무시
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // .ts 파일도 해석
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, // 라이선스 파일 추출 비활성화
            }),
        ],
    },
};
