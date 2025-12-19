import React from 'react'
import { Button } from 'react-bootstrap';

function Download({targetRef}:{targetRef: any}) {
    const downloadHTML=()=>{
        if(!targetRef) return;
    }

    const copySignature=()=>{
        if(!targetRef) return;
    }
  return (
    <div><Button
      variant="primary"
      onClick={downloadHTML}
      style={{ display: "flex",position:"absolute",float:"right",right:"25%",top:"50%" }}
    >
      <span>Download</span>
    </Button>
    <Button
      variant="warning"
      onClick={copySignature}
      style={{ display: "flex",position:"absolute",float:"right",right:"25%",top:"45%" }}
    >
      <span>Copy</span>
    </Button>
    </div>
  )
}

export default Download