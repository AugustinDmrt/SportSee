class User {
  private id: number;
  private userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  private score: number;
  private keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
  constructor(
    id: number,
    userInfos: { firstName: string; lastName: string; age: number },
    score: number,
    keyData: {
      calorieCount: number;
      proteinCount: number;
      carbohydrateCount: number;
      lipidCount: number;
    }
  ) {
    this.id = id;
    this.userInfos = userInfos;
    this.score = score;
    this.keyData = keyData;
  }

  setUserId(id: number) {
    this.id = id;
  }

  getUserId() {
    return this.id;
  }

  setUserInfos(userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  }) {
    this.userInfos = userInfos;
  }

  getUserInfos() {
    return this.userInfos;
  }

  setScore(score: number) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  setKeyData(keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  }) {
    this.keyData = keyData;
  }

  getKeyData() {
    return this.keyData;
  }
}
export default User;
