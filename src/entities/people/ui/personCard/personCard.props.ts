import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Person } from 'src/entities/people';

export interface PersonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: Person;
	controlsSlot?: ReactNode;
}
