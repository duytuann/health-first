import { Layout } from 'antd';
// import { getListTabStart } from 'modules/app-global/redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { ReduxStateType } from 'redux/types';
import { AppHeader, SideBar } from './components';
import Loading from './components/Loading';
import { ContentWrapper, LayoutWrapper } from './styles';

const MainLayout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
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

  // return status === ReduxStateType.LOADING ? (
  //   <Loading />
  // ) : status === ReduxStateType.INIT ? null : (
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
