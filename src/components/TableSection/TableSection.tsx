import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface TableRow {
  key: string;
  afvalsoort: string;
  beter: string;
  gemiddeld: string;
  onder: string;
  onbekend: string;
}

interface TableSectionProps {
  columns: ColumnsType<TableRow>;
  data: TableRow[];
}

export default function TableSection({ columns, data }: TableSectionProps) {
  return (
    <Table columns={columns} dataSource={data} pagination={false} bordered />
  );
}
