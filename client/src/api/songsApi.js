class CourseApi {
  static getAllSongs() {
    return fetch("http://localhost:8080/getSongs")
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}

export default CourseApi;
