import { Modal, ModalFuncProps } from 'antd';
import styled from 'styled-components/macro';

export const ModalWrapper = styled(Modal)<ModalFuncProps>`
  .ant-modal-close-x {
    width: 50px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;

    .anticon {
      color: ${({ theme }) => theme.textblueColor};
      font-size: 16px;

      &:hover {
        background: ${({ theme }) => theme.textwhiteColor};
        padding: 8px;
        border-radius: 50%;
      }
    }
  }

  .ant-modal {
    top: 25px;
  }

  .ant-modal-content {
    border-radius: 15px;
  }

  .ant-modal-header {
    padding: 10px 20px;
    background: ${({ theme }) => theme.bluelightColor};
    border-radius: 15px 15px 0 0;
  }

  .ant-modal-title {
    color: ${({ theme }) => theme.textblueColor};
    font-size: 20px;
    text-align: center;
    font-weight: 700;
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    text-align: left;
  }

  label.ant-form-item-required {
    font-weight: 600;
  }

  .ant-form-item-label > label {
    font-weight: 600;
  }

  .custom-col {
    padding: 16px 16px 0 16px;
    margin-bottom: 16px;
    background: #f2f2f2;
    border-radius: 8px;
  }

  .box-scroll-y {
    overflow-y: scroll;
    height: 200px;
  }

  .ant-row .ant-form-item {
    margin-bottom: 10px;
  }

  .search-document {
    .ant-form-vertical .ant-form-item-label {
      padding: 0 0 1px;
    }
  }
`;
