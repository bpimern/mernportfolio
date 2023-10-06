import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  // @ts-ignore
  className?: any;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
