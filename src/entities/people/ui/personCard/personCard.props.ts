import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Person } from "entities/people";

export interface PersonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Person;
  controlsSlot?: ReactNode;
}
