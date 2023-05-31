import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FormItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	error?: string;
	children: ReactNode;
}
