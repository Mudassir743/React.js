// import { Children, useState } from "react";
// interface Props {
//   children: string;
//   maxChart?: number;
// }

// const ExpandableText = ({ children, maxChart = 50 }: Props) => {
//   const [isExpanded, setExpanded] = useState(false);
//   if (children.length <= maxChart) return <p> {children}</p>;
//   const text = isExpanded ? children : children.substring(0, maxChart);
//   return (
//     <p
//       style={{
//         fontWeight: "bold",
//         fontFamily: "sans-serif",
//         color: "GrayText",
//       }}
//     >
//       {text}....{" "}
//       <button
//         style={{ border: 0, borderRadius: 50, cursor: "pointer" }}
//         onClick={() => setExpanded(!isExpanded)}
//       >
//         {isExpanded ? "Less" : "More"}
//       </button>
//     </p>
//   );
// };

// export default ExpandableText;
