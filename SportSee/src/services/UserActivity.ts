class UserActivity {
  private id: number;
  private sessions: { day: string; kilogram: number; calories: number }[];

  constructor(
    id: number,
    sessions: { day: string; kilogram: number; calories: number }[]
  ) {
    this.id = id;
    this.sessions = sessions;
  }

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setSessions(sessions: { day: string; kilogram: number; calories: number }[]) {
    this.sessions = sessions;
  }

  getSessions() {
    return this.sessions;
  }
}

export default UserActivity;
