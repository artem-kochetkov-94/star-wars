import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  itemsCount: number;
  hasNext: boolean;
  hasPrevious: boolean;
  next: () => Promise<void>;
  previous: () => Promise<void>;
  isFetching: boolean;
}
