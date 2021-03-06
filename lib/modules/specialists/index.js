module.exports = {
  extend: 'apostrophe-pieces',
  name: 'specialist',
  alias: 'specialists',
  addFields: [
    {
      name: '_products',
      type: 'joinByArrayReverse',
      withType: 'product',
      reverseOf: '_specialists'
    }
  ]
};

