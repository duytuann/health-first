import { Layout } from 'antd';
// import { getListTabStart } from 'modules/app-global/redux';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { AppHeader, SideBar } from './components';
import { ContentWrapper, LayoutWrapper } from './styles';

const MainLayout: React.FC = ({ children }) => {
    const history = useHistory();

    const { isAuthenticated } = useSelector((state: RootState) => state.auth.data);

    // const { status } = useSelector((state: RootState) => state.appGlobal);

    useEffect(() => {
        if (isAuthenticated) {
            // dispatch(getListTabStart());
        } else {
            history.push('/Login');
        }
    }, [isAuthenticated]);

    return (
        <LayoutWrapper>
            <AppHeader />
            <Layout>
                <SideBar />
                <ContentWrapper>
                    <Layout.Content className="site-layout-background">{children}</Layout.Content>
                </ContentWrapper>
            </Layout>
        </LayoutWrapper>
    );
};

export default MainLayout;
