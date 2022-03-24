import type { NextPage } from "next";
import Page from "../components/Page";

const Home: NextPage = () => {
  return (
    <>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">
        Download PDF
      </a>
      <Page>
        <h1>Generated PDF</h1>
        <div style={{ display: "flex" }}>
          <div>
            <p>As you can see you can scroll without issues and select text.</p>
          </div>
          <div>
            <p>As you can see you can scroll without issues and select text.</p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
