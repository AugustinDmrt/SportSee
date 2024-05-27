import axios from "axios";
import Data from "../assets/data/data.tsx";
import User from "../services/User.ts";

async function getData(urlId: string) {
  let data = Data;
  let allUsersId: number[] = [];
  let allUsers: object[] = [];

  data[0].map((user) => {
    allUsersId.push(user.id);
  });

  try {
    const userRequests = allUsersId.map((id) =>
      axios.get(`http://localhost:3000/user/${id}`)
    );
    const responses = await Promise.all(userRequests);

    responses.forEach((response) => {
      const userDatas = response.data.data;
      if (userDatas.todayScore === undefined) {
        userDatas.todayScore = userDatas.score;
      } else {
        userDatas.score = userDatas.todayScore;
      }
      allUsers.push(
        new User(
          userDatas.id,
          userDatas.userInfos,
          userDatas.score,
          userDatas.keyData
        )
      );
    });

    const user = allUsers.find((user) => user.id === parseInt(urlId));
    return user;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
}

export default getData;
