import axios from "axios";
import Data from "../assets/data/data.tsx";
import User from "../services/User.ts";

function getData() {
  let data = Data;
  let allUsersId: number[] = [];
  let allUsers: object[] = [];

  data[0].map((user) => {
    allUsersId.push(user.id);
  });
  allUsersId.forEach((id) =>
    axios
      .get(`http://localhost:3000/user/${id}`)
      .then(function (response) {
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
      })
      .catch(function (error) {
        console.log(error);
      })
  );
  return allUsers;
  // userTest = new User(1, { firstName: "Thomas", lastName: "Shelby", age: 35 }, 100, {
  //   calorieCount: 2500,
  //   proteinCount: 200,
  //   carbohydrateCount: 300,
  //   lipidCount: 100,
  // });
}
export default getData;
