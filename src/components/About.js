import pic from "../img/pic.JPG";

function About() {
  return (
    <div className="About">
      <h2>Hello you! This is me :)</h2>
      <img className="pic" src={pic} alt="pic" />
    </div>
  );
}
export default About;
