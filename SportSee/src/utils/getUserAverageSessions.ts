import axios from "axios";
import Data from "../assets/data/data.tsx";
import UserAverageSessions from "../services/UserAverageSessions .ts";

async function getUserAverageSessions(urlId: string) {
  const data = Data;
  const allUsersId: number[] = [];
  const allUserSessions: UserAverageSessions[] = [];

  data[0].map((user) => {
    allUsersId.push(user.id);
  });

  try {
    const sessionRequests = allUsersId.map((id) =>
      axios.get(`http://localhost:3000/user/${id}/average-sessions`)
    );
    const responses = await Promise.all(sessionRequests);

    responses.forEach((response) => {
      const userSessionData = response.data.data;
      const userSession = new UserAverageSessions(
        userSessionData.userId,
        userSessionData.sessions
      );
      allUserSessions.push(userSession);
    });
    const userSession = allUserSessions.find(
      (session) => session.getId() === parseInt(urlId)
    );
    return userSession;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de sessions moyennes :",
      error
    );
    return null;
  }
}

export default getUserAverageSessions;
