//Render method as used in React - ReactDOM.render(<App />, document.getElementById('root'))

function render(element, parentDom) {
  const { type, props } = element;
  const dom = document.createElement(type);


const isListener = name => name.startsWith('on');
//Check to see if Object.props starts with the word 'on' to check for event listening method
Object.keys(props).filter(isListener).forEach(name => {
  //Check what type of event it is
  const eventType = name.toLowerCase().substring(2)
  dom.addEventListener(eventType, props[name]);
})

const isAttribute = name => !isListener(name) && name != "children";
Object.keys(props).filter(isAttribute).forEach(name => {

})

const childElements = props.children || [];
childElements.forEach(childElement => render(childElement, dom));
parentDom.appendChild(dom);



// const element = {
//   type: "div",
//   props: {
//     id: "container",
//     children: [
//       { type: "input", props: { value: "foo", type: "text" } },
//       { type: "a", props: { href: "/bar" } },
//       { type: "span", props: {} }
//     ]
//   }
// };