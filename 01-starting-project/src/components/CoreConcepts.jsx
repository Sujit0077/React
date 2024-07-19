import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";
export default function CoreConcepts(){

    return (
        <Section title="Core Concepts" id="core-concepts">
          
          <ul>
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}


            /> */}


            {/* <CoreConcepts {...CORE_CONCEPTS[0]} /> */}


            {/* <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}


            {/* <CoreConcepts {...CORE_CONCEPTS[1]} /> */}


            {/* <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            /> */}


            {/* <CoreConcepts {...CORE_CONCEPTS[2]} /> */}


            {/* <CoreConcepts
             title={CORE_CONCEPTS[3].title}
             description={CORE_CONCEPTS[3].description}
             image={CORE_CONCEPTS[3].image}
            /> */}


            {/* <CoreConcepts {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map(item => (<CoreConcept key={item.title} {...item} />))}
          </ul>
        </Section>
    );
}