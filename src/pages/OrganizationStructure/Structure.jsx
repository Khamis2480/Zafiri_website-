import React from 'react';
import Tree from 'react-d3-tree';
import './Structure.css';

const Structure = () => {
  const orgChart = {
    name: "BODI YA WAKURUGENZI",
    children: [
      {
        name: "MKURUGENZI MKUU",
        children: [
          { name: "KITENGO CHA MANUNUZI YA UMMA" },
          { name: "KITENGO CHA HUDUMA ZA SHERIA" },
          { name: "KITENGO CHA TEHAMA NA UHUSIANO WA UMMA" },
          { name: "KITENGO CHA UHASIBU" },
          { name: "KITENGO CHA UKAGUZI WA NDANI" },
          { name: "KITENGO CHA UDHIBITI UBORA" },
          { name: "KITUO CHA UTAFITI PEMBA" },
          {
            name: "IDARA YA UTAFITI, UBUNIFU NA UELIMISHAJI",
            children: [
              { name: "DIVISHENI YA UTAFITI WA UVUVI" },
              { name: "DIVISHENI YA UTAFITI WA UKUZAJI WA VIUMBE MAJI" },
              { name: "DIVISHENI YA UTAFITI WA MAZINGIRA NA MIFUMO YA BAHARI" }
            ]
          },
          {
            name: "IDARA YA USIMAMIZI WA MAABARA",
            children: [
              { name: "DIVISHENI YA MAABARA YA KEMIA NA VIMELEA" },
              { name: "DIVISHENI YA MAABARA YA UZALISHAJI WA VIUMBE MAJI" }
            ]
          },
          {
            name: "IDARA YA RASILIMALI WATU, UTAWALA NA MIPANGO",
            children: [
              { name: "DIVISHENI YA RASILIMALI WATU NA UTAWALA" },
              { name: "DIVISHENI YA MIPANGO NA TAKWIMU" },
              { name: "DIVISHENI YA USIMAMIZI WA KUMBUKUMBU" }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div className="orgchart-wrapper">
      <div id="treeWrapper" className="tree-container">
        <Tree
          data={orgChart}
          orientation="vertical"
          translate={{ x: 300, y: 100 }}
          nodeSize={{ x: 200, y: 120 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          renderCustomNodeElement={({ nodeDatum, toggleNode }) => (
            <g>
              <rect
                width="180"
                height="60"
                x="-90"
                y="-30"
                fill={nodeDatum.depth === 0 ? "#2a4d9b" : nodeDatum.depth === 1 ? "#3498db" : "#ecf0f1"}
                stroke={nodeDatum.depth === 0 ? "#1a3d7b" : nodeDatum.depth === 1 ? "#2980b9" : "#bdc3c7"}
                strokeWidth="2"
                rx="8"
                ry="8"
              />
              <text
                fill={nodeDatum.depth === 0 ? "white" : nodeDatum.depth === 1 ? "white" : "#2c3e50"}
                stroke="none"
                fontSize={nodeDatum.depth === 0 ? 14 : nodeDatum.depth === 1 ? 12 : 10}
                textAnchor="middle"
                dy=".35em"
              >
                {nodeDatum.name.split(' ').map((word, i) => (
                  <tspan key={i} x="0" dy={i === 0 ? "-0.6em" : "1.2em"}>
                    {word}
                  </tspan>
                ))}
              </text>
              {nodeDatum.children && (
                <circle
                  r="12"
                  fill="white"
                  stroke="#2a4d9b"
                  strokeWidth="2"
                  onClick={toggleNode}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </g>
          )}
          pathClassFunc={() => 'custom-link'}
          initialDepth={2}
          zoomable={true}
          draggable={true}
          collapsible={true}
        />
      </div>
    </div>
  );
};

export default Structure;