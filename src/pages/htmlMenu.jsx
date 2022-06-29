import htmlContent from "../ExpandingRoundedMenu/src/index.html";


export default function MyComponent() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
