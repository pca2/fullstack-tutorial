// Apollo lib for fetching data from a REST API
const { RESTDataSource } = require('apollo-datasource-rest');

// Our instance of the class. All you hadve to do is define a baseURL
class LaunchAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL ='https://api.spacexdata.com/v2/';
  }
}

module.exports = LaunchAPI;
