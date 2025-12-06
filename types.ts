

export type ProjectStatus = 'Not Started' | 'In Progress' | 'On Hold' | 'Cancelled' | 'Finished';

export interface User {
  id: string;
  name: string;
  avatar: string; // URL or Initials
  role: string;
}

export interface Task {
  id: string;
  title: string;
  assignee?: User;
  status: 'Not Started' | 'In Progress' | 'On Hold' | 'Completed';
  category: string; // e.g., "Uncategorized", "Project Backlogs"
  priority: 'low' | 'medium' | 'high';
  startDate?: string;
  dueDate?: string;
  loggedTime?: string; // e.g., "12:30"
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  startDate: string;
  dueDate: string;
  status: 'completed' | 'active' | 'upcoming';
  loggedTime: string;
}

export interface TimesheetEntry {
  id: string;
  user: User;
  taskTitle: string;
  startTime: string;
  endTime: string;
  timeSpent: string;
}

export interface FileEntry {
  id: string;
  filename: string;
  fileType: string;
  lastActivity: string; // user who updated
  totalComments: number;
  dateUploaded: string;
  size?: string;
}

export interface ActivityLog {
  id: string;
  user: User;
  action: string;
  target: string; // e.g., "Removed task assignee"
  description: string;
  timestamp: string; // e.g., "3 DAYS AGO"
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
  id: string;
  clientName: string;
  projectName: string;
  description: string;
  startDate: string;
  deadline: string;
  billingType: string;
  totalRate: number;
  status: ProjectStatus;
  
  // Stats
  progress: number;
  openTasksCount: number;
  totalTasksCount: number;
  daysLeft: number;
  totalDays: number;
  totalLoggedHours: string;

  // Collections
  tasks: Task[];
  milestones: Milestone[];
  timesheets: TimesheetEntry[];
  files: FileEntry[];
  activities: ActivityLog[];
  invoices: Invoice[];
  members: User[];
}

export enum ViewState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  PROJECT_DETAILS = 'PROJECT_DETAILS',
  TASKS = 'TASKS',
  GANTT = 'GANTT',
  MILESTONES = 'MILESTONES',
  BILLING = 'BILLING',
}

export type ProjectTab = 'Overview' | 'Tasks' | 'Timesheets' | 'Milestones' | 'Files' | 'Discussions' | 'Gantt' | 'Tickets' | 'Activity';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}