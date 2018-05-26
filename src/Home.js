import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <span> <h2 className ="typewriter"> We are VerbaTek. We are disruptive. We are innovative. We are <em className = "emphasis"> University of Waterloo students. </em> </h2></span>
        <div className = "fade-animation">
        <h3>Handup has arrived:</h3>
        <p> Through the utilization of Myo gesture mapping, the HandUp software is an easily accessible interface that provides the tools necessary for basic communication for the verbally-impaired.

It is projected that approximately 80,000 Canadians will require the use of an intubation system for assisted breathing between 2018-2019. This restricts them from using words to communicate. As most of these incidents requiring the intubation happen quickly, there is relatively little time to prepare for the intubation period by adopting a visual language such as American Sign Language (ASL).

Instead, VerbaTech's HandUp software provides an easy interface for gesture controlled communication. This system has been designed to be as simple as possible for the user. Based on four natural movements, you can control the interface to scroll through the words.</p>
      <h3>Applications:</h3>
      <ul>
  <li>Intubation/Mechanical Ventilation Patients</li>
  <li>Stroke Victims</li>
  <li>Smoking-related Larynx-removal surgery</li>
  <li>Birth defect of the mouth and/or larynx</li>
  <li>Selective mutism</li>
  <li>Autism</li>
</ul>
      <h3>How it works:</h3>
      <p> 
      Using a .tech domain, we have created a website that contains the user-friendly interface for the communication tools. Examples of this include categories such as food, drinks, names, entertainment. They also have the option to add more categories. Once a category is selected, they are brought to their list of words for that category. An example for the entertainment category would be "Turn TV On", "Turn TV Off", "Sports" and "News". They also have the option to add more words to each category.
      </p>
      </div>
      </div>
    );
  }
}
 
export default Home;