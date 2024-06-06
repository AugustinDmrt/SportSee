import axios from "axios";
import Data from "../assets/data/data.tsx";
import UserPerformance from "../services/UserPerformance .ts";

async function getUserPerformance(urlId: string) {
  const data = Data;
  const allUsersId: number[] = [];
  const allUserPerformances: UserPerformance[] = [];

  data[0].map((user) => {
    allUsersId.push(user.id);
  });

  try {
    const performanceRequests = allUsersId.map((id) =>
      axios.get(`http://localhost:3000/user/${id}/performance`)
    );
    const responses = await Promise.all(performanceRequests);

    responses.forEach((response) => {
      const userPerformanceData = response.data.data;
      const userPerformance = new UserPerformance(
        userPerformanceData.userId,
        userPerformanceData.kind,
        userPerformanceData.data
      );
      allUserPerformances.push(userPerformance);
    });
    const userPerformance = allUserPerformances.find(
      (performance) => performance.getUserId() === parseInt(urlId)
    );
    return userPerformance;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de performance :",
      error
    );
    return null;
  }
}

export default getUserPerformance;
