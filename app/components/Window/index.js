import React from 'react';
import { Modal } from '@react95/core';
import { Resizable } from 're-resizable';

export default function index(props) {
  return (
    <Modal
      title="Junior Campos - About"
      icon="folder"
      width="100%"
      height="100%"
    >
      <Resizable
        minWidth={600}
        minHeight={400}
        maxHeight={1000}
        defaultSize={{
          width: 400,
          height: 600,
        }}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        {props.children}
      </Resizable>
    </Modal>
  );
}
