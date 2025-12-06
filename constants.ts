import { ProjectData } from './types';

export const MOCK_PROJECT_DATA: ProjectData = {
  clientName: "Acme Corp",
  projectName: "Enterprise E-Commerce Platform Rewrite",
  startDate: "2023-10-01",
  deadline: "2024-04-15",
  overallProgress: 68,
  budgetUsed: 45000,
  totalBudget: 75000,
  milestones: [
    {
      id: "m1",
      title: "Discovery & Design",
      description: "Initial requirements gathering, wireframing, and UI/UX design approval.",
      status: "completed",
      date: "2023-10-30",
      completedAt: "2023-10-28"
    },
    {
      id: "m2",
      title: "Backend Core Architecture",
      description: "Database setup, API definition, and authentication services.",
      status: "completed",
      date: "2023-11-20",
      completedAt: "2023-11-25"
    },
    {
      id: "m3",
      title: "Frontend MVP Integration",
      description: "Key user flows: Login, Dashboard, and Product Listing.",
      status: "active",
      date: "2024-01-15"
    },
    {
      id: "m4",
      title: "Beta Launch",
      description: "Internal testing and limited user group release.",
      status: "upcoming",
      date: "2024-03-01"
    },
    {
      id: "m5",
      title: "Final Handover",
      description: "Production deployment and documentation transfer.",
      status: "upcoming",
      date: "2024-04-15"
    }
  ],
  tasks: [
    { id: "t1", title: "Refactor User Auth API", assignee: "Dev Team A", status: "done", priority: "high", dueDate: "2023-11-10" },
    { id: "t2", title: "Design Product Card Component", assignee: "Design Team", status: "done", priority: "medium", dueDate: "2023-11-15" },
    { id: "t3", title: "Integrate Stripe Payment Gateway", assignee: "Dev Team B", status: "in-progress", priority: "high", dueDate: "2024-01-20" },
    { id: "t4", title: "User Profile Settings Page", assignee: "Frontend Dev", status: "review", priority: "low", dueDate: "2024-01-25" },
    { id: "t5", title: "Admin Analytics Dashboard", assignee: "Dev Team A", status: "todo", priority: "medium", dueDate: "2024-02-10" },
    { id: "t6", title: "Mobile Responsiveness Audit", assignee: "QA Team", status: "todo", priority: "high", dueDate: "2024-02-15" },
  ],
  invoices: [
    { id: "INV-2023-001", amount: 15000, status: "paid", issueDate: "2023-10-01", dueDate: "2023-10-15", items: ["Initial Deposit", "Discovery Phase"] },
    { id: "INV-2023-002", amount: 20000, status: "paid", issueDate: "2023-12-01", dueDate: "2023-12-15", items: ["Milestone 2 Completion", "Server Costs"] },
    { id: "INV-2024-001", amount: 10000, status: "pending", issueDate: "2024-01-05", dueDate: "2024-01-20", items: ["Milestone 3 Partial", "Q1 Maintenance"] },
    { id: "INV-2024-002", amount: 30000, status: "pending", issueDate: "2024-03-01", dueDate: "2024-03-15", items: ["Beta Launch", "Final Implementation"] },
  ]
};