
module.exports = {
  construct: function(self, options) {
    // loads from public/js/site.js of this module
    self.pushAsset('script', 'foundation/vendor/foundation');
    // loads from public/css/site.less of this module
    self.pushAsset('stylesheet', 'foundation/app');
  }
};