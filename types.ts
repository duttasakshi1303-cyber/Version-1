export interface Task {
  id: string;
  title: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  date: string;
  completedAt?: string;
}

export interface Invoice {
  id: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  issueDate: string;
  dueDate: string;
  items: string[];
}

export interface ProjectData {
  clientName: string;
  projectName: string;
  startDate: string;
  deadline: string;
  overallProgress: number;
  budgetUsed: number;
  totalBudget: number;
  milestones: Milestone[];
  tasks: Task[];
  invoices: Invoice[];
}

export enum ViewState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  TASKS = 'TASKS',
  GANTT = 'GANTT',
  MILESTONES = 'MILESTONES',
  BILLING = 'BILLING',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}