import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");
  // let tabContent="please click the tab";
  function handleSelect(selectedButton) {
    //selectedButton:- 'component','jsx','props','state'
    // console.log(selectedButton)

    // tabContent=selectedButton;
    // console.log(tabContent)

    // console.log(selectedTopic)

    setSelectedTopic(selectedButton)
    console.log(selectedTopic)


  }
  // third way

  let tabContent = <p>Please Select Topic</p>;
  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>
        {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs buttonContainer="menu" buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>

        </>
      }>
        {tabContent}
      </Tabs>


      {/* <TabButton children="Components"/>
            <TabButton children="JSX"/>
            <TabButton children="Props"/>
            <TabButton children="State"/> */}
      {/* one way */}

      {/* 
          {!selectedTopic ? <p>Please Select Topic</p> : (<div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)
          } */}

      {/* second way */}
      {/* 
          {!selectedTopic && <p>Please Select Topic</p>  }
          {selectedTopic && (<div id="tab-content">
            <h3>
              {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)
          } */}

    </Section>
  );
}