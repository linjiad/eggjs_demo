/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_linjiad';
  // add your middleware config here
  config.middleware = [];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.api = 'www.linjaid.com';
  // 配置公共的api
  config.api2 = 'http://www.phonegap100.com/appapi.php';
  config.api3 = 'http://www.phonegap100.com/appapi.php';
  return {
    ...config,
    ...userConfig,
  };
};
