
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Homepage",
        "taskDescription": "Create the UI design for the homepage.",
        "taskDate": "2026-06-05",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Banner",
        "taskDescription": "Design promotional banners.",
        "taskDate": "2026-06-07",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Resolve authentication issue.",
        "taskDate": "2026-06-01",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Dashboard",
        "taskDescription": "Develop admin dashboard components.",
        "taskDate": "2026-06-06",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Navbar",
        "taskDescription": "Improve navigation UI.",
        "taskDate": "2026-06-02",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Connect frontend with backend API.",
        "taskDate": "2026-06-03",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Aditya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Test Cases",
        "taskDescription": "Create unit test cases.",
        "taskDate": "2026-06-08",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Verification",
        "taskDescription": "Verify fixed bugs.",
        "taskDate": "2026-06-09",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Krishna",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Optimization",
        "taskDescription": "Improve query performance.",
        "taskDate": "2026-06-10",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create APIs",
        "taskDescription": "Develop REST APIs.",
        "taskDate": "2026-05-30",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review backend code.",
        "taskDate": "2026-06-01",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Rohan",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project requirements.",
        "taskDate": "2026-06-06",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Create monthly report.",
        "taskDate": "2026-06-02",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Project Planning",
        "taskDescription": "Prepare sprint plan.",
        "taskDate": "2026-06-01",
        "category": "Management"
      }
    ]
  }
];

const admin = [
  {
    "id": 101,
    "firstName": "Rajesh",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees,admin} 
}