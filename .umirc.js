
// ref: https://umijs.org/config/
export default {
    base: '/100-days-of-ARTS/',
    publicPath: '/100-days-of-ARTS/',
    treeShaking: true,
    plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: false,
            dva: false,
            dynamicImport: { webpackChunkName: true },
            title: '100ARTS',
            dll: false,

            routes: {
                exclude: [
                /components\//,
                ],
            },
        }
    ],
    ['umi-plugin-gh-pages',]
  ],
}
