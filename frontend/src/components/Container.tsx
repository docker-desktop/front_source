interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Container = ({ children, className = '' }: IContainerProps) => {
  return (
    <div className={`w-full mt-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container;