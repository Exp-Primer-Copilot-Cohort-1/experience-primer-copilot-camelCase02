function skillsMember() {
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        salary: 25000,
        getSalary: function() {
            return this.salary;
        }
    };
    return member;
}