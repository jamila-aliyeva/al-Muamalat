import React from "react";
import "./index.css";

import { Collapse } from "antd";
const QuestionsPage = () => {
  const { Panel } = Collapse;

  const text = `Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.`;

  return (
    <section className="questions-page">
      <div className="container">
        <div className="questions-header">
          <h2>Frequently asked questions</h2>
          <p>If you have any further questions, please contact us </p>
        </div>
        <div className="questions-content">
          <div>
            {" "}
            <Collapse accordion>
              <Panel
                header="Will I receive lifetime access to the courses?"
                key="1"
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header="Will I receive lifetime access to the courses?"
                key="2"
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header="Will I receive lifetime access to the courses?"
                key="3"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
          <div>
            <Collapse accordion>
              <Panel
                header="Can I use the materials for community teaching?"
                key="1"
              >
                <p>{text}</p>
              </Panel>
              <Panel header="Is there a free trial for the courses?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="Who can benefit from these courses?" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsPage;
