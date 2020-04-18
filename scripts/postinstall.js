/* eslint-disable max-len */
var env = process.env;
var ADBLOCK = is(env.ADBLOCK);
var CI = is(env.CI);
var COLOR = is(env.npm_config_color);
var SILENT = !!~['silent', 'error', 'warn'].indexOf(env.npm_config_loglevel);

function is(it) {
  return !!it && it !== '0' && it !== 'false';
}

function log(it) {
  // eslint-disable-next-line no-console,no-control-regex
  console.log(COLOR ? it : it.replace(/\u001B\[\d+m/g, ''));
}

if (!ADBLOCK && !CI && !SILENT) {
  log('\u001B[96mThank you for using max-utils (\u001B[94m https://github.com/JimmieMax/max-utils \u001B[96m)');
  log('\u001B[96mIf you like it, Please Give me a star! \u001B[0m');
}
