import React from "react";

interface HeadingsProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Headings: React.FC<HeadingsProps> = ({
  level = 1,
  children,
  ...props
}) => {
  const Tag = `h${level}`;

  //   switch (level) {
  //     case 1:
  //       return <h1>{children}</h1>;
  //     case 2:
  //       return <h2>{children}</h2>;
  //     case 3:
  //       return <h3>{children}</h3>;
  //     case 4:
  //       return <h4>{children}</h4>;
  //     case 5:
  //       return <h5>{children}</h5>;
  //     case 6:
  //       return <h6>{children}</h6>;
  //     default:
  //       return <p>{children}</p>;
  //   }

  return <Tag {...props}>{children}</Tag>;
};

export default Headings;
