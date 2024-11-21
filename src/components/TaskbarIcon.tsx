interface TaskbarIconProps {
  children: React.ReactNode;
  className?: string;
}

export const TaskbarIcon = ({ children, className }: TaskbarIconProps) => {
  return (
    <div className={`duration-300 ${className} border border-transparent rounded-md hover:backdrop-blur-lg hover:bg-neutral-800/30 hover:border-neutral-700/60`}>
      {children}
    </div>
  )
}