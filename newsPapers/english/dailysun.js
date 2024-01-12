const dailysunCat = require("./dailysun/dailysunCat");
const dailysunCatLeading = require("./dailysun/dailysunCatLeading");

exports.dailysun = {
  leading: async function (page) {
    return await dailysunCatLeading(page);
  },
  national: async function (page) {
    return await dailysunCat(page);
  },

  international: async function (page) {
    return await dailysunCat(page);
  },

  business: async function (page) {
    return await dailysunCat(page);
  },

  sports: async function (page) {
    return await dailysunCat(page);
  },

  feature: async function (page) {
    return await dailysunCat(page);
  },

  entertainment: async function (page) {
    return await dailysunCat(page);
  },

  tech: async function (page) {
    return await dailysunCat(page);
  },

  opinion: async function (page) {
    return await dailysunCat(page);
  },

  health: async function (page) {
    return await dailysunCat(page);
  },
};
