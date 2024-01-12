const {
  bangladeshTodayCat,
} = require("./theBangladeshToday/bangladeshTodayCat");

exports.bangladeshToday = {
  leading: async function (page) {
    return bangladeshTodayCat({
      selector: ".leadBox",
      page: page,
    });
  },

  national: async function (page) {
    return await bangladeshTodayCat({ selector: ".main-content", page: page });
  },

  international: async function (page) {
    return bangladeshTodayCat({
      selector: ".main-content",
      page: page,
    });
  },

  politics: async function (page) {
    return bangladeshTodayCat({ selector: ".main-content", page: page });
  },

  business: async function (page) {
    return bangladeshTodayCat({ selector: ".main-content", page: page });
  },

  entertainment: async function (page) {
    return bangladeshTodayCat({
      selector: ".main-content",
      page: page,
    });
  },

  sports: async function (page) {
    return bangladeshTodayCat({ selector: ".main-content", page: page });
  },
  feature: async function (page) {
    return bangladeshTodayCat({ selector: ".main-content", page: page });
  },
};
