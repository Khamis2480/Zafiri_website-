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
          <TreeNode label={<div className="org-node">KITENGO CHA UDHIBITI UBORA</div>} />
          <TreeNode label={<div className="org-node">IDARA YA UTAFITI, UBUNIFU NA UELIMISHAJI</div>}>
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA VUVUVI</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA UKUZAJI WA VIUMBE MAJI</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA UTAFITI WA MAZINGIRA NA MIFUMO YA BAHARI</div>} />
          </TreeNode>
          <TreeNode label={<div className="org-node">IDARA YA USIMAMIZI WA MAABARA</div>}>
            <TreeNode label={<div className="org-node">DIVISHENI YA MAABARA YA KEMIA NA VIMELEA</div>} />
            <TreeNode label={<div className="org-node">DIVISHENI YA MAABARA YA UZALISHAJI WA VIUMBE MAJI</div>} />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

export default Structure;