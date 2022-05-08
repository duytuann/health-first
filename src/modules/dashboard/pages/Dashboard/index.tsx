import SystemAdvanceSearch from 'modules/dashboard/components/SystemAdvanceSearch';
import WeeklyNews from 'modules/dashboard/components/WeeklyNews';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { postGetAllStart } from 'modules/dashboard/redux';
import { OverviewWrapper } from './styles';

const data = [
  [
    {
      day: 'Thứ Hai - Ngày 01/04/2002',
      theloai: 'Tin bài',
      tendetai: 'Bản tin dự báo thời tiết',
      giophatsong: '6:00',
      tennguoidangky: 'Nguyễn Vũ',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Phóng sự',
      tendetai: 'Người trẻ khởi nghiệp',
      giophatsong: '7:00',
      tennguoidangky: 'Nguyễn Vũ',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Ghi nhanh',
      tendetai: 'ban tin du bao thoi tiet',
      giophatsong: '8:00',
      tennguoidangky: 'Thanh Thảo',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Bài phân tích',
      tendetai: 'Cải cách hành chính',
      giophatsong: '11:15',
      tennguoidangky: 'Kiều Tiên',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Bài phân tích',
      tendetai: 'Điện và cuộc sống',
      giophatsong: '15:00',
      tennguoidangky: 'Trống',
      ghichu: '',
    },
  ],
  [
    {
      day: 'Thứ Hai - Ngày 01/04/2002',
      theloai: 'Tin bài',
      tendetai: 'Bản tin dự báo thời tiết',
      giophatsong: '6:00',
      tennguoidangky: 'Nguyễn Vũ',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Phóng sự',
      tendetai: 'Người trẻ khởi nghiệp',
      giophatsong: '7:00',
      tennguoidangky: 'Nguyễn Vũ',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Ghi nhanh',
      tendetai: 'ban tin du bao thoi tiet',
      giophatsong: '8:00',
      tennguoidangky: 'Thanh Thảo',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Bài phân tích',
      tendetai: 'Cải cách hành chính',
      giophatsong: '11:15',
      tennguoidangky: 'Kiều Tiên',
      ghichu: '',
    },
    {
      day: 'Thứ Ba - Ngày 02/04/2002',
      theloai: 'Bài phân tích',
      tendetai: 'Điện và cuộc sống',
      giophatsong: '15:00',
      tennguoidangky: 'Trống',
      ghichu: '',
    },
  ],
];

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  // const {
  //   status,
  //   data: { listTopic },
  // } = useSelector((state: RootState) => state.topic);

  // useEffect(() => {
  //   dispatch(
  //     postGetAllStart({
  //       CategoryId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //       TopicName: 'string',
  //       UserIDPerform: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  //       Week: 0,
  //       DayOfWeek: 0,
  //       Year: 0,
  //     })
  //   );
  // }, []);

  return (
    <OverviewWrapper>
      <SystemAdvanceSearch />
      {data.map((item, index) => (
        <div key={index}>
          <WeeklyNews props={item} />
        </div>
      ))}
    </OverviewWrapper>
  );
};

export default Dashboard;
