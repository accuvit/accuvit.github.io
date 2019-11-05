import React, { useContext } from 'react';
import { WindowsContext } from 'components/WindowContext';
import { Modal } from '@react95/core';
import { Resizable } from 're-resizable';

export default function Window(props) {
  const [windows, setWindows] = useContext(WindowsContext).windows;
  const { closeWindow, focusWindow, focusQueue } = useContext(WindowsContext);
  const { name, iconName, target, key, isFocus } = props.item;
  return (
    <Modal
      title={name}
      icon={iconName}
      width="100%"
      height="100%"
      closeModal={() => closeWindow(key)}
      style={{
        zIndex: 100 - focusQueue.indexOf(key),
      }}
      onClick={() => {
        focusQueue[0] === key ? null : focusWindow(key);
      }}
    >
      <Resizable
        minWidth={300}
        minHeight={200}
        maxHeight={1000}
        defaultSize={{
          width: '50vw',
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
        {target}
      </Resizable>
    </Modal>
  );
}
