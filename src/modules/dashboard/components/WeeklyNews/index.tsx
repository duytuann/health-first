import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import { DailyNewsWrapper, Table, TableHeaderContainer, TableRow, TableHeader, TableData, Content } from './styles';

interface IWeekly {
  day: string;
  theloai: string;
  tendetai: string;
  giophatsong: string;
  tennguoidangky: string;
  ghichu: string;
}

interface IWeeklyNewsProps {
  props: IWeekly[];
}

const WeeklyNews: React.FC<IWeeklyNewsProps> = ({ props }) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = (e: any) => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };

  return (
    <>
      <DailyNewsWrapper>
        <div style={{ display: 'flex', paddingBottom: '20px' }} onClick={handleToggle}>
          <Icon className="keyboard_arrow_down" name="keyboard_arrow_down" size={22} color="#000" />
          <span style={{ fontSize: '16px' }}>
            <b>Thứ 2 - Ngày 01/04/2002</b>
          </span>
        </div>
        <div style={isToggle === true ? { display: 'none' } : {}}>
          <div style={{ padding: '0 20px' }}>
            <Table>
              <TableHeaderContainer>
                <TableHeader width={'150px'}>Thể loại</TableHeader>
                <TableHeader width={'270px'}>Tên đề tài</TableHeader>
                <TableHeader width={'120px'}>Giờ phát sóng</TableHeader>
                <TableHeader width={'170px'}>Tên người đăng ký</TableHeader>
                <TableHeader>Ghi chú</TableHeader>
                <TableHeader width={'100px'}>Thao tác</TableHeader>
              </TableHeaderContainer>
              {props.map((item: IWeekly, index: number) => (
                <TableRow>
                  <TableData>
                    <Content>{item.theloai}</Content>
                  </TableData>
                  <TableData>
                    <Content>{item.tendetai}</Content>
                  </TableData>
                  <TableData>
                    <Content>{item.giophatsong}</Content>
                  </TableData>
                  <TableData>
                    <Content>{item.tennguoidangky}</Content>
                  </TableData>
                  <TableData>
                    <Content>{item.ghichu}</Content>
                  </TableData>
                  <TableData>
                    <Content></Content>
                  </TableData>
                </TableRow>
              ))}
            </Table>
          </div>
        </div>
      </DailyNewsWrapper>
    </>
  );
};

export default WeeklyNews;
