
import { ProjectData, User } from './types';

const USERS: Record<string, User> = {
  ben: { id: 'u1', name: 'Ben William', avatar: 'BW', role: 'Developer' },
  fred: { id: 'u2', name: 'Fred Hunter', avatar: 'FH', role: 'Designer' },
  hamza: { id: 'u3', name: 'Muhammad Hamza', avatar: 'MH', role: 'Developer' },
  rizwan: { id: 'u4', name: 'Rizwan Pervaiz', avatar: 'RP', role: 'QA' },
  danyal: { id: 'u5', name: 'Danyal Ahmad Khan', avatar: 'DK', role: 'Manager' },
};

export const MOCK_PROJECTS: ProjectData[] = [
  {
    id: "p1",
    clientName: "WealthMax",
    projectName: "WealthMax New CRM Development",
    description: "No description for this project",
    startDate: "03-04-2025",
    deadline: "18-05-2025",
    billingType: "Fixed Rate",
    totalRate: 0.00,
    status: "In Progress",
    
    progress: 45.45,
    openTasksCount: 26,
    totalTasksCount: 43,
    daysLeft: 0,
    totalDays: 45,
    totalLoggedHours: "1209:30",

    members: Object.values(USERS),

    tasks: [
      { 
        id: "t1", 
        title: "Document Category Testing", 
        status: "In Progress", 
        category: "Uncategorized", 
        priority: "high", 
        startDate: "03-04-2025", 
        dueDate: "04-04-2025",
        assignee: USERS.danyal
      },
      { 
        id: "t2", 
        title: "Case Management → Register Case Testing", 
        status: "In Progress", 
        category: "Uncategorized", 
        priority: "medium", 
        startDate: "06-05-2025", 
        dueDate: "07-05-2025",
        assignee: USERS.rizwan
      },
      { 
        id: "t3", 
        title: "Design Introducer Screen", 
        status: "In Progress", 
        category: "Uncategorized", 
        priority: "high", 
        startDate: "13-09-2025", 
        dueDate: "18-05-2025",
        assignee: USERS.fred
      },
      { 
        id: "t4", 
        title: "User Management → Manage Case ...", 
        status: "Not Started", 
        category: "Uncategorized", 
        priority: "low", 
        startDate: "27-06-2025", 
        dueDate: "28-06-2025",
        assignee: USERS.hamza
      },
      {
        id: "t5",
        title: "Fix layout as per figma of manage leads...",
        status: "Completed",
        category: "Project Backlogs",
        priority: "high",
        startDate: "05-08-2025",
        dueDate: "05-08-2026",
        assignee: USERS.ben
      }
    ],

    milestones: [
      { id: "m1", title: "Project Backlogs", description: "", startDate: "05-08-2025", dueDate: "05-08-2026", status: "active", loggedTime: "00:00" },
      { id: "m2", title: "Approved from Client for Development", description: "", startDate: "05-08-2025", dueDate: "05-08-2026", status: "active", loggedTime: "00:00" },
      { id: "m3", title: "Design & Discussion", description: "", startDate: "05-08-2025", dueDate: "05-08-2026", status: "active", loggedTime: "00:00" },
      { id: "m4", title: "Branch Module", description: "", startDate: "05-08-2025", dueDate: "05-09-2025", status: "upcoming", loggedTime: "00:00" },
      { id: "m5", title: "Introducer Module", description: "", startDate: "05-08-2025", dueDate: "05-09-2025", status: "upcoming", loggedTime: "00:00" },
    ],

    timesheets: [
      { id: "ts1", user: USERS.ben, taskTitle: "Fix layout as per figma of manage leads, customer and case management", startTime: "04-12-2025 5:12 PM", endTime: "05-12-2025 5:15 PM", timeSpent: "24:03" },
      { id: "ts2", user: USERS.ben, taskTitle: "Fix layout as per figma of manage leads, customer and case management", startTime: "16-10-2025 3:22 PM", endTime: "03-12-2025 11:59 PM", timeSpent: "1160:36" },
      { id: "ts3", user: USERS.fred, taskTitle: "update font, font family of wealthmax crm", startTime: "25-08-2025 6:48 PM", endTime: "25-08-2025 11:07 PM", timeSpent: "04:18" },
      { id: "ts4", user: USERS.fred, taskTitle: "update font, font family of wealthmax crm", startTime: "22-08-2025 6:43 PM", endTime: "22-08-2025 11:08 PM", timeSpent: "04:24" },
    ],

    files: [
       // Empty in screenshot, but adding one for demo
       // { id: "f1", filename: "Requirements.pdf", fileType: "PDF", lastActivity: "Ben William", totalComments: 2, dateUploaded: "2025-04-01" }
    ],

    activities: [
      { id: "a1", user: USERS.danyal, action: "Removed task assignee", target: "Fix layout as per figma...", description: "Fix layout as per figma of manage leads, customer and case management - Danyal Ahmad Khan", timestamp: "3 DAYS AGO" },
      { id: "a2", user: USERS.danyal, action: "Added new task assignee", target: "Fix layout as per figma...", description: "Fix layout as per figma of manage leads, customer and case management - Fred Hunter", timestamp: "3 DAYS AGO" },
      { id: "a3", user: USERS.danyal, action: "Added new task assignee", target: "Fix layout as per figma...", description: "Fix layout as per figma of manage leads, customer and case management - Ben William", timestamp: "3 DAYS AGO" },
      { id: "a4", user: USERS.danyal, action: "Added new task assignee", target: "Fix layout as per figma...", description: "Fix layout as per figma of manage leads, customer and case management - Danyal Ahmad Khan", timestamp: "3 DAYS AGO" },
    ],

    invoices: [
      { id: "INV-001", amount: 12000, status: "paid", issueDate: "2025-04-01", dueDate: "2025-04-15", items: ["Initial Milestone"] }
    ]
  },
  {
    id: "p2",
    clientName: "WealthMax",
    projectName: "Old CRM Maintenance Project",
    description: "Maintenance and legacy support.",
    startDate: "23-11-2025",
    deadline: "",
    billingType: "Fixed Rate",
    totalRate: 500.00,
    status: "In Progress",
    
    progress: 90,
    openTasksCount: 2,
    totalTasksCount: 20,
    daysLeft: 120,
    totalDays: 365,
    totalLoggedHours: "50:00",

    members: [USERS.ben, USERS.rizwan],
    tasks: [],
    milestones: [],
    timesheets: [],
    files: [],
    activities: [],
    invoices: []
  }
];

export const MOCK_PROJECT_DATA = MOCK_PROJECTS[0];
