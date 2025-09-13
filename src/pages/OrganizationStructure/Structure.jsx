import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./Structure.css";

const Structure = () => {
  return (
    <div className="orgchart-wrapper">
      <Tree
        label={<div className="org-node main">BODI YA WAKURUGENZI</div>}
      >
        <TreeNode label={<div className="org-node">MKURUGENZI MKUU</div>}>
          
          {/* Vitengo */}
          <TreeNode label={<div className="org-node">KITENGO CHA MANUNUZI YA UMMA</div>} />
          <TreeNode label={<div className="org-node">KITENGO CHA HUDUMA ZA SHERIA</div>} />
          <TreeNode label={<div className="org-node">KITENGO CHA TEHAMA NA UHUSIANO WA UMMA</div>} />
          <TreeNode label={<div className="org-node">KITENGO CHA UHASIBU</div>} />
          <TreeNode label={<div className="org-node">KITENGO CHA UKAGUZI WA NDANI</div>} />
          <TreeNode label={<div className="org-node">KITENGO CHA UDHIBITI UBORA</div>} />
          <TreeNode label={<div className="org-node">KITIVO CHA UTAFITI PEMBA</div>} />

          {/* Idara Utafiti */}
          <TreeNode label={<div className="org-node">IDARA YA UTAFITI, UBUNIFU NA UELIMISHAJI</div>}>
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA VUVUVI</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA UKUZAJI WA VIUMBE MAJI</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA MAZINGIRA NA MIFUMO YA BAHARI</div>} />
          </TreeNode>

          {/* Idara Maabara */}
          <TreeNode label={<div className="org-node">IDARA YA USIMAMIZI WA MAABARA</div>}>
            <TreeNode label={<div className="org-node">DIVISHENI YA MAABARA YA KEMIA NA VIMELEA</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA MAABARA YA UZALISHAJI WA VIUMBE MAJI</div>} />
          </TreeNode>

          {/* Idara Rasilimaliwatu */}
          <TreeNode label={<div className="org-node">IDARA YA RASILIMALIWATU, UTAWALA NA MIPANGO</div>}>
            <TreeNode label={<div className="org-node">DIVISHENI YA RASILIMALIWATU NA UTAWALA</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA MIPANGO NA TAKWIMU</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA USIMAMIZI WA KUMBUKUMBU</div>} />
          </TreeNode>

        </TreeNode>
      </Tree>
    </div>
  );
};

export default Structure;
