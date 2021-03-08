import "./page-footer.css";

function PageFooter() {
  const year = new Date().getFullYear();
  return <footer className="page-footer">@ Janet Santoyo, {year}</footer>;
}

export default PageFooter;
