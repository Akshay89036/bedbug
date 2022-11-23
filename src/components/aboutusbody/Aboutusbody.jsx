import React from "react";
import "./aboutusbody.css"

const Aboutus=()=>{
    return(
<>


<div className="container">

<div className="caption">Bed Bugs FAQ’s</div>
<div className="headings">The following are some of the frequently asked questions and answers relating to bed bugs, that we get asked by many of our clients in Toronto.

</div>

</div>



<div className="container">
<div class="accordion" id="accordionExample">
  <div class="accordion-item fonty">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How Long Do Bed Bug Bites Last?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The symptoms caused by bed bug bites aren’t typically long lasting. Allergic reactions might remain for a few days or in some cases, a few weeks. Most commonly, bed bug bites disappear in less than 3 days but there have been rare occasions where bed bug bites took three weeks to disappear. Usually scratching the bed bug bite will cause tears and bleeding, in effect taking the bed bug bite longer to disappear.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What Do Bed Bug Bites Look Like?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Bed bug bites appear as itchy and red bites on the skin. They usually appear on the shoulders or arms, however they can appear anywhere on the body that is exposed while sleeping. One of the most distinct features of bed bug bites is that they usually happen in rows and are usually not isolated. To read more please check out our Bed Bug Bites page.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How Long Do Bed Bugs Live?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Enough research hasn’t been done on bed bugs to determine exactly how long they live. According to samples that have been conducted, adult bed bugs have been reported to survive for as long as five months without feeding. In cold temperatures, when their metabolisms have been slowed down, they have been reported to live as long as one year without food. New born bedbugs, called nymphs, require food within a few days of hatching, otherwise they will die.
      </div>
    </div>
  </div>
</div>
</div>
</>
    );
};


export default Aboutus;