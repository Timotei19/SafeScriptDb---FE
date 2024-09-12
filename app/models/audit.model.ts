import { AuditItem } from "./audit-item.model";

export interface Audit {
  id: number;
  startDate: Date;
  endDate?: Date; // '?' denotes that this property is optional
  databaseName: string;
  status: number;
  result: number;
  rollbackDone: boolean;
  userId: number;
  auditItems: AuditItem[]; // Array of AuditItem
}
