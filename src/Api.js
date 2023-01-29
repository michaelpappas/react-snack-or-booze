import axios from "axios";

const BASE_API_URL = "http://localhost:5001";

/*
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  /** returns an array of snack objects from the api
   * like [{id, name, description, recipe, serve}, ...]
  */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  /** returns an array of drink objects from the api
   * like [{id, name, description, recipe, serve}, ...]
  */
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async setItem(data) {
    const type = data.type;
    debugger;
    // delete data.type;
    const results = await axios.post(`${BASE_API_URL}/${type}`, data);
    return results.data;
  }
}


export default SnackOrBoozeApi;
