var foodControl = require('./foodController.js');

module.exports = function (app) {

  ////////CATEGORIES////////////////////////////////////////////////////

  app.route('/category')
    // Get categories for the given userID
    .get(function (req, res) {
      foodControl.getCategories(req.query.userID).then(function (categories) {
        res.status(200).send(categories);
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Add category to db
    .post(function (req, res) {
      // Add the category to the database
      foodControl.addCategory(req.body).then(function () {
        // Query the database for all the categories with that userID (which will include the one we just added)
        foodControl.getCategories(req.body.userID).then(function (categories) {
          // Send success response status along with those categories
          res.status(201).send(categories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Updtate a specific entry
    .put(function (req, res) {
      foodControl.updateCategory(req.body, function () {
        // Query the database for all the categories with that userID (which will include the one we just added)
        foodControl.getCategories(req.body.userID).then(function (categories) {
          // Send success response status along with those categories
          res.status(201).send(categories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Delete a specific entry
    .delete(function (req, res) {
      foodControl.deleteCategory(req.body, function () {
        // Query the database for all the categories with that userID (which will include the one we just added)
        foodControl.getCategories(req.body.userID).then(function (categories) {
          // Send success response status along with those categories
          res.status(201).send(categories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    });

  ////////SUBCATEGORIES////////////////////////////////////////////////

  app.route('/subcategory')
    .get(function (req, res) {
      foodControl.getSubcategories(req.query.categoryID).then(function (subcategories) {
        res.status(200).send(subcategories);
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });

    })
    // Add subcategory to db
    .post(function (req, res) {
      // Add the subcategory to the database
      foodControl.addSubcategory(req.body).then(function () {
        // Query the database for all the subcategories with that categoryID (which will include the one we just added)
        foodControl.getSubcategories(req.body.categoryID).then(function (subcategories) {
          // Send success response status along with those subcategories
          res.status(201).send(subcategories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Updtate a specific entry
    .put(function (req, res) {
      foodControl.updateSubcategory(req.body, function () {
        // Query the database for all the subcategories with that userID (which will include the one we just added)
        foodControl.getSubcategories(req.body.categoryID).then(function (subcategories) {
          // Send success response status along with those subcategories
          res.status(201).send(subcategories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Delete a specific entry
    .delete(function (req, res) {
      foodControl.deleteSubcategory(req.body, function () {
        // Query the database for all the subcategories with that userID (which will include the one we just added)
        foodControl.getSubcategories(req.body.categoryID).then(function (subcategories) {
          // Send success response status along with those subcategories
          res.status(201).send(subcategories);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    });

  ////////ENTRIES////////////////////////////////////////////////////

  app.route('/entry')
    // Get entries for the given subcategoryID
    .get(function (req, res) {
      foodControl.getEntries(req.query.subcategoryID).then(function (entries) {
        res.status(200).send(entries);
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Add entry to db, and return all entries for the given subcategoryID
    .post(function (req, res) {
      // Add the entry to the database
      foodControl.addEntry(req.body).then(function () {
        // Query the database for all the entries with that subcategoryID (which will include the one we just added)
        foodControl.getEntries(req.body.subcategoryID).then(function (entries) {
          // Send success response status along with those entries
          res.status(201).send(entries);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Updtate a specific entry
    .put(function (req, res) {
      foodControl.updateEntry(req.body, function () {
        // Query the database for all the entries with that userID (which will include the one we just updated)
        foodControl.getEntries(req.body.subcategoryID).then(function (entries) {
          // Send success response status along with those entries
          res.status(201).send(entries);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    })
    // Delete a specific entry
    .delete(function (req, res) {
      foodControl.deleteEntry(req.body, function () {
        // Query the database for all the entries with that userID (which will include the one we just updated)
        foodControl.getEntries(req.body.subcategoryID).then(function (entries) {
          // Send success response status along with those entries
          res.status(201).send(entries);
        }, function (err) {
          console.log('err in route: ', err);
          res.status(204).send(err);
        });
      }, function (err) {
        console.log('err in route: ', err);
        res.status(204).send(err);
      });
    });

};
