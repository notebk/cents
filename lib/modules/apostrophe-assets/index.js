  // Use jQuery 3.x, which is lighter but not the default for bc
  // reasons. All modern browsers including IE11+ can handle jQuery 3
  // We'll push our own custom assets in the "theme" module instead.
  // This projects us from any future conflicts with new assets
  // in the apostrophe-assets module
  module.exports = {
    stylesheets: [
      {
        name: 'style'
      }
    ],
    jQuery: 3,
    construct: function(self, options) {
      // modules
      self.scripts.push({ name: 'modules/materialize', when: 'always' });
      self.scripts.push({ name: 'modules/what-input', when: 'always' });
      self.scripts.push({ name: 'modules/init', when: 'always' });
    }
  };
