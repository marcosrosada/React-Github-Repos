const path = require('path');

module.exports = {
  components: 'src/components/**/*.js',
  ignore: ['**/*.spec.js', '**/components/**/styles.js'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
        },
      ],
    },
  },
};
