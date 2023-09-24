import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Button>
        <Link href="/">To index!</Link>
      </Button>
    </div>
  );
}

export default Home;
