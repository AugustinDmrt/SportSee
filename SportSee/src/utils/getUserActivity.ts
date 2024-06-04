import axios from "axios";
import Data from "../assets/data/data.tsx";
import UserActivity from "../services/UserActivity.ts";

async function getUserActivity(urlId: string) {
  let data = Data;
  let allUsersId: number[] = [];
  let allUserActivities: UserActivity[] = [];

  data[0].map((user) => {
    allUsersId.push(user.id);
  });

  try {
    const activityRequests = allUsersId.map((id) =>
      axios.get(`http://localhost:3000/user/${id}/activity`)
    );
    const responses = await Promise.all(activityRequests);

    responses.forEach((response) => {
      const userActivityData = response.data.data;
      const userActivity = new UserActivity(
        userActivityData.id,
        userActivityData.sessions
      );
      allUserActivities.push(userActivity);
    });

    const userActivity = allUserActivities.find(
      (activity) => activity.getId() === parseInt(urlId)
    );
    return userActivity;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données d'activité :",
      error
    );
    return null;
  }
}

export default getUserActivity;
