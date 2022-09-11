import Accordion from "./components/Accordion";

const demoData = [
  {
    title: "This is a title",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sint quos dignissimos, molestias ut ipsam excepturi! Quidem ad dolores, eum nisi maxime, facilis rerum, laborum architecto culpa corporis minima. Inventore nisi ducimus exercitationem. Quas ipsum et iure consequatur expedita, nobis accusamus sit hic sed earum delectus consectetur natus soluta incidunt.",
  },
  {
    title: "This is a title",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sint quos dignissimos, molestias ut ipsam excepturi! Quidem ad dolores, eum nisi maxime, facilis rerum, laborum architecto culpa corporis minima. Inventore nisi ducimus exercitationem. Quas ipsum et iure consequatur expedita, nobis accusamus sit hic sed earum delectus consectetur natus soluta incidunt.",
  },
  {
    title: "This is a title",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo sint quos dignissimos, molestias ut ipsam excepturi! Quidem ad dolores, eum nisi maxime, facilis rerum, laborum architecto culpa corporis minima. Inventore nisi ducimus exercitationem. Quas ipsum et iure consequatur expedita, nobis accusamus sit hic sed earum delectus consectetur natus soluta incidunt.",
  },
  {
    title: "This is a title",
    body: (
      <>
        <h1>This is title of the Body</h1>
        <p>Hello World</p>
      </>
    ),
  },
];

function App() {
  return (
    <div className="app">
      <Accordion data={demoData} defaultExpandItem={2} />
    </div>
  );
}

export default App;
