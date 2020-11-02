import axios from "axios";

const Assignments = {
  async index() {
    try {
      const response = await axios.get("/assignments");
      debugger
      return response.data.assignments;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Assignments;
