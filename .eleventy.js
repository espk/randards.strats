module.exports = function (eleventyConfig) {


  eleventyConfig.addShortcode('wowhead', function (name, id) {
    return `[${name}](https://www.wowhead.com/spell=${id})`
  });

  eleventyConfig.addShortcode('wowhead-npc', function (name, id) {
    return `[${name}](https://www.wowhead.com/npc=${id})`
  });

  eleventyConfig.addPassthroughCopy("source/css");

  // You can return your Config object (optional).
  return {
    dir: {
      input: 'source',
      output: 'site'
    },
    pathPrefix: "/strats/"
  };
};