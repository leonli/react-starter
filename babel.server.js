require('babel/register')({
  stage: 0,
  plugins: ['typecheck']
});

require('./src/server/server');
