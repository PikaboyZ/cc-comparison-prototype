const axios = require('axios');

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'cc-comparison-prototype',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Credit Cards Comparison Prototype'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /**
     * CSS Resources
     */
    css: [
        // SCSS file in the project
        '@/assets/css/main.scss'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        extractCSS: true,
    },
    /**
     * Modules
     */
    modules: [
        '@nuxtjs/axios',
    ],
    generate: {
        routes: function () {
            return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    return res.data.map((post) => {
                        return `/results/${post.id}`;
                    });
                })
        }
    }
};

