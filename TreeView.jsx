const Accordion = ({ text = "", nodes = [] }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="cont flex flex-col gap-5">
      <div
        className="wrapper flex gap-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {nodes?.length > 0 &&
          <div
            className={`
              icon
              font-extrabold
              cursor-default ${!isOpen ? "rotate-90" : "rotate-180"}
            `}
          >
            ^
          </div>
        }
        <div className="text">
          {text}
        </div>
      </div>

      {(nodes?.length > 0 && isOpen) &&
        <TreeView nodes={nodes}/>
      }
    </div>
  );
}


const TreeView = ({ nodes = [] }) => {

  return (
    nodes.map((node, index) => 
      <Accordion
        key={index}
        text={node.text}
        nodes={node?.nodes || []}
      />
    )
  );
}
