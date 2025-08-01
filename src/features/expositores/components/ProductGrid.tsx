import React from 'react';
import { clsx } from 'clsx';

interface GridProps extends React.ComponentProps<'ul'> {
  children: React.ReactNode;
}

interface GridItemProps extends React.ComponentProps<'li'> {
  children: React.ReactNode;
}

function Grid({ children, className, ...props }: GridProps) {
  return (
    <ul 
      {...props} 
      className={clsx(
        'grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 items-stretch',
        className
      )}
    >
      {children}
    </ul>
  );
}

function GridItem({ children, className, ...props }: GridItemProps) {
  return (
    <li 
      {...props} 
      className={clsx(
        'h-full transition-opacity hover:opacity-75',
        className
      )}
    >
      {children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid; 