class UserPerformance {
  private userId: number;
  private kind: { [key: number]: string };
  private data: { value: number; kind: number }[];
  DataIntensity: any;

  constructor(
    userId: number,
    kind: { [key: number]: string },
    data: { value: number; kind: number }[]
  ) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId: number) {
    this.userId = userId;
  }

  getKind() {
    return this.kind;
  }

  setKind(kind: { [key: number]: string }) {
    this.kind = kind;
  }

  getData() {
    return this.data;
  }

  setData(data: { value: number; kind: number }[]) {
    this.data = data;
  }
}

export default UserPerformance;
