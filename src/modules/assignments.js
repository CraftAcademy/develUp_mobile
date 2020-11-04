import axios from "axios";


const Assignments = {
  async index() {
    try {
      const response = await axios(
        {
          url: "/assignments",
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        });
      console.table(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default Assignments;
