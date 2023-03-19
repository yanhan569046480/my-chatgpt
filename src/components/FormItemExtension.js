import * as React from 'react';

function FormItemExtension({
  label = null,
  alignItems,
  labelPosition,
  labelWidth = '150px',
  children,
  required = false,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: labelPosition == 'left' ? 'row' : 'column',
        alignItems:
          alignItems || (labelPosition == 'left' ? 'center' : 'flex-start'),
        margin: '16px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: labelPosition == 'left' ? 'flex-end' : 'flex-start',
          width: labelWidth,
          margin: '0 16px 0 0',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'rgb(5, 26, 46)',
        }}
      >
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </div>

      <div
        style={{
          width: '100%',
          textAlign: 'left',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default FormItemExtension;
