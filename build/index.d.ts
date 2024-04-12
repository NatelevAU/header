import { AppBarProps } from '@mui/material';
import React, { ReactNode } from 'react';
interface HeaderProps extends AppBarProps {
    headerType: 'top' | 'side' | 'side-right' | 'bottom' | 'drop-top' | 'drop-side';
    logo?: React.FC;
    firstElements?: React.FC[];
    middleElements?: React.FC[];
    lastElements?: React.FC[];
    headerWidth?: number;
    topBackground?: string;
    background?: string;
    backgroundColor?: string;
    textColor?: string;
    highlightBackgroundColor?: string;
    highlightTextColor?: string;
    children?: ReactNode;
}
declare const Header: React.ForwardRefExoticComponent<Omit<HeaderProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Header;
