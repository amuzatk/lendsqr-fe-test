import React from 'react';
import { Pagination } from 'antd';

const Paginate: React.FC = () => <Pagination defaultCurrent={1} total={150} />;

export default Paginate;