class UserAverageSessions {
  private userId: number;
  private sessions: { day: string; sessionLength: number }[];

  constructor(
    userId: number,
    sessions: { day: string; sessionLength: number }[]
  ) {
    this.userId = userId;
    this.sessions = sessions;
  }

  getId() {
    return this.userId;
  }

  getSessions() {
    return this.sessions;
  }

  setId(userId: number) {
    this.userId = userId;
  }

  setSessions(sessions: { day: string; sessionLength: number }[]) {
    this.sessions = sessions;
  }
}

export default UserAverageSessions;
