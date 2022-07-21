export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses]; // 읽기 전용 배열을 반환
  }

  set courses(courses) {
    this.#courses = courses;
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);

    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");

ellie.courses.push(new Course("리팩토링", true)); // 외부에서 객체안에 배열을 마음대로 다룰수 있다. 불변성에 위배

const course = new Course("리팩토링", true);
ellie.addCourse(course);
console.log(ellie.courses.length);

ellie.removeCourse(course, () => {
  console.log("해당 코스는 없다.");
});
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
  console.log("해당 코스는 없다.");
});
