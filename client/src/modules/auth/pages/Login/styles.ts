import styled from 'styled-components/macro';

export const LoginWrapper = styled.div`
    width: 80%;
    max-width: 1300px;
    margin: 30px auto;
    box-shadow: 0px 2px 20px rgba(13, 157, 87, 0.25);
    border-radius: 8px;
    /* position: absolute; */
    /* top: 30%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */

    .banner-name-app {
        color: ${({ theme }) => theme.primaryColor};
        font-size: 30px;
        line-height: 35px;
        font-weight: 700;
        margin: 40px 0;
        text-transform: uppercase;
    }
`;

export const LoginBanner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-direction: column;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LoginFormLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 991px) {
        &:after {
            content: '';
            position: absolute;
            left: 0;
            height: 80%;
            width: 1px;
            background: ${({ theme }) => theme.primaryColor};
        }
    }
`;

export const FormLoginWrapper = styled.div`
    width: 80%;
    max-width: 450px;

    .form-heading {
        padding: 20px 16px;
        color: ${({ theme }) => theme.primaryColor};
        display: flex;
        align-items: center;
        font-size: 30px;
        justify-content: center;
        line-height: 35px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .ant-form-item-label label,
    label.ant-checkbox-wrapper span {
        font-weight: 600;
    }
`;
