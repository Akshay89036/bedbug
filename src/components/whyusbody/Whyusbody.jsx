import React from "react";
import "./Whyusbody.css";
import bedbugpic from "./bedbugpic.png"

const Whyusbody = () => {
  return (
    <>
      <div>
        <div className="container col-8 abc">
          GET TO KNOW TORONTO'S NUMBER
          #1 BEDBUG EXTREMINATOR
          <div className="head ce" >ABOUT BYEBYEBEDBUGS</div>
        </div>

{/* 

        <div className="container">
          <div className="card" style={{ width: '18rem' }}>

            <img src={bedbugpic} className="card-img-top" alt="bedbyg" />

            <div className="card-body">
              <h5 className="card-title abc">What are bed bugs?</h5>
              <p className="card-text">Bed bugs are small insects (about the size
                of an apple seed) with oval-shaped bodies
                and no wings. They usually come out
                and bite at night. It is possible for
                anyone, anywhere to experience a
                bed bug infestation, but they can be
                prevented and controlled.</p>
              <a href="" className="btn btn-primary">byebyebedbugs.ca</a>
            </div>

          </div>
        </div>


        <div className="container">
          <div className="card" style={{ width: '18rem' }}>

            <img src={bedbugpic} className="card-img-top" alt="bedbyg" />

            <div className="card-body">
              <h5 className="card-title">What are bed bugs?</h5>
              <p className="card-text ">Bed bugs are small insects (about the size
                of an apple seed) with oval-shaped bodies
                and no wings. They usually come out
                and bite at night. It is possible for
                anyone, anywhere to experience a
                bed bug infestation, but they can be
                prevented and controlled.</p>
              <a href="" className="btn btn-primary">byebyebedbugs.ca</a>
            </div>

          </div>
        </div> */}


<div className="container">
<div class="card-group">
  <div class="card">
    <img src={bedbugpic} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title abc">What are bed bugs?</h5>
      <p class="card-text cc">Bed bugs are small insects (about the size
of an apple seed) with oval-shaped bodies
and no wings. They usually come out
and bite at night. It is possible for
anyone, anywhere to experience a
bed bug infestation, but they can be
prevented and controlled.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 12 days ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div>








      </div>


















    </>
  );
};


export default Whyusbody;
