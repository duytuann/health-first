import { ModalFuncProps } from 'antd';
import Button from 'components/Button';
import React from 'react';
import { ModalWrapper } from './styles';
interface IModalProps extends ModalFuncProps {
  color?: any;
  footer?: React.ReactNode;
}
const Modal: React.FC<IModalProps> = ({
  className,
  onCancel,
  onOk,
  visible,
  title,
  type,
  color,
  footer,
  width,
  children,
  maskClosable,
  style,
  bodyStyle,
}) => {
  return (
    <ModalWrapper
      bodyStyle={bodyStyle}
      style={style}
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      type={color ? type : undefined}
      width={width}
      className={className}
      destroyOnClose
      maskClosable={maskClosable}
      footer={
        footer || footer === null
          ? footer
          : [
              <div key="footer" className="d-flex justify-content-end">
                <Button color="primary" key="back" onClick={onCancel}>
                  Đóng(ESC)
                </Button>
                <Button color="primary" $fill key="submit" onClick={onOk}>
                  Ghi nhận
                </Button>
              </div>,
            ]
      }
    >
      {children}
    </ModalWrapper>
  );
};
export default Modal;
